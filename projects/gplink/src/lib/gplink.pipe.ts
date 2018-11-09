import { Pipe, PipeTransform } from '@angular/core';
import linkifyStr from 'linkifyjs/string';

@Pipe({
  name: 'gplink'
})
export class GplinkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value ? linkifyStr(value, {target: '_system'}) : value;
    // this is the default indian number validation regex if user not provide
    const indianNumber = '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$'; 
    let userRegex = new RegExp(args ? args : indianNumber,'igm');
    if(value.includes("+")){
      //splitting string on + sign to find mobile numbers from that
      let inputStringArray = value ? value.split("+") : [];
      if(inputStringArray.length > 0){
        let line = "";
        for(let i=0;i < inputStringArray.length; i++){
          line += this.getAnchoredNumber(inputStringArray[i], userRegex, true);
        }
        value = line;
      }
    }

    else if(value.includes(" ")){
      value = this.getAnchoredNumber(value, userRegex,false);
    }

    else if(value.match(userRegex)){
      value = "<a href=tel:+"+value+" target='_top'>"+value+"</a>";
    }
    return value;
  }

  getAnchoredNumber(value,userRegex,isContainPlusSign) {
    let inputStringArray = value ? value.split(" ") : [];
    if(inputStringArray.length > 0){
      for(let i=0;i < inputStringArray.length; i++){
        if(inputStringArray[i].match(userRegex)){
          if(isContainPlusSign){
            inputStringArray[i] = "<a href=tel:+"+inputStringArray[i]+" target='_top'>+"+inputStringArray[i]+"</a>";
          }
          else{
            inputStringArray[i] = "<a href=tel:"+inputStringArray[i]+" target='_top'>"+inputStringArray[i]+"</a>";
          }
        }
      }
      value = inputStringArray.join(" ");
    }
    return value;
  }
}
