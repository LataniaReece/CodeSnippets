import imaplib
import os 
import email
import base64

#You may have to run this as administration in order for environment variables to work
EMAIL_ADDRESS = os.environ.get('gmail_email')
EMAIL_PASSWORD = os.environ.get('gmail_password') #this is an app password, set another one here: https://myaccount.google.com/apppasswords?rapt=AEjHL4OugBfSLenIZ1beYRmGzctz8d5dTZTWAtBU23hveJygzJB6OaCTzIkvxdIuyNIS6OJ_feHh6NDKw04W-Mi5fxeC8jgZjw

#login 
mail = imaplib.IMAP4_SSL('imap.gmail.com')
mail.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
# print(mail.list()) #lists all the folders

mail.select('ReeceCode')

results, data = mail.search(None, 'ALL')
mail_ids = data[0]
id_list = mail_ids.split()

# email_messages = []
for num in data[0].split():
    typ, data = mail.fetch(num, '(RFC822)' )
    raw_email = data[0][1]
# converts byte literal to string removing b''
    raw_email_string = raw_email.decode('utf-8')
    email_message = email.message_from_string(raw_email_string)
    print(email_message)

#     for part in email_message.walk():
#         # this part comes from the snipped I don't understand yet... 
#         if part.get_content_maintype() == 'multipart':
#             continue
#         if part.get('Content-Disposition') is None:
#             continue
#         fileName = part.get_filename()
#         if bool(fileName):
#             filePath = os.path.join(r'C:\Users\reece\Desktop\codeSnippets\Automation', fileName)
#             if not os.path.isfile(filePath) :
#                 fp = open(filePath, 'wb')
#                 fp.write(part.get_payload(decode=True))
#                 fp.close()
#                 subject = str(email_message).split("Subject: ", 1)[1].split("\nTo:", 1)[0]
#                 # print('Downloaded "{file}" from email titled "{subject}" with UID {uid}.'.format(file=fileName, subject=subject, uid=latest_email_uid.decode('utf-8')))

# for response_part in data:
#         if isinstance(response_part, tuple):
#             msg = email.message_from_string(response_part[1].decode('utf-8'))
#             email_subject = msg['subject']
#             email_from = msg['from']
#             print ('From : ' + email_from + '\n')
#             print ('Subject : ' + email_subject + '\n')
#             print(msg.get_payload(decode=True))