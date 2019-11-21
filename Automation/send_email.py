import os
import smtplib
import requests

#You may have to run this as administration in order for environment variables to work
EMAIL_ADDRESS = os.environ.get('gmail_email')
EMAIL_PASSWORD = os.environ.get('gmail_password') #this is an app password, set another one here: https://myaccount.google.com/apppasswords?rapt=AEjHL4OugBfSLenIZ1beYRmGzctz8d5dTZTWAtBU23hveJygzJB6OaCTzIkvxdIuyNIS6OJ_feHh6NDKw04W-Mi5fxeC8jgZjw

#Connect to gmail and login
server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)

#Subject, body, messagg
subject = 'Test Email'
body = 'This is a test email sent from python'
msg = f'Subject: {subject}\n\n{body}'

#Send the email (from, to, message)
server.sendmail(
  EMAIL_ADDRESS, 
  EMAIL_ADDRESS, 
  msg)
server.quit()

print("Email Sent")

