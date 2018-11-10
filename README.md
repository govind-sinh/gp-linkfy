# GpLinkify

# Overview
 
Angular pipe to convert url, email and mobile number from text to clickable or linkable.
This library uses linkifyjs under the hood. All the thing which linkifyjs do all that functionality beed provided in this library with addition to mobile number clickable with custom format of mobile number.

# Installation
npm install gplink --save

## Example

<h2 [innerHtml] = "title | gplink:reg"> </h2>

Here pipe 'gplink' will convert all the email, urls and mobile number to clickable format from the text provided in title.

If you want to convert any specific formatted mobile number or phone numbers to clickable you need to provide it's regular expression as another argument.

#Note:
Please keep in mind that when you provide regular expression that contain backward slash(\), then do it twice to parse it properly.
If you regular expression is like this, \+?\d[\d -]{8,12}\d, then convert it like this, 
\\+?\\d[\\d -]{8,12}\\d.
If you not provide any reg-ex then it will not convert any mobile numbers to clickable except indian mobile number format.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

