#Code found here: https://gist.github.com/robulouski/7441883 - took out of function

import sys
import imaplib
import getpass
import email
import email.header
import datetime
import os, io


#You may have to run this as administration in order for environment variables to work
EMAIL_ADDRESS = os.environ.get('gmail_email')
EMAIL_PASSWORD = os.environ.get('gmail_password') #this is an app password, set another one here: https://myaccount.google.com/apppasswords?rapt=AEjHL4OugBfSLenIZ1beYRmGzctz8d5dTZTWAtBU23hveJygzJB6OaCTzIkvxdIuyNIS6OJ_feHh6NDKw04W-Mi5fxeC8jgZjw



def check_email(email_folder_to_search, search_criteria, saved_emails_filename):
    #login 
    mail = imaplib.IMAP4_SSL('imap.gmail.com')
    try:
        mail.login(EMAIL_ADDRESS, EMAIL_PASSWORD)   
        print("Logged in")
    except:
        print("LOGIN FAILED")
    # print(mail.list())
    mail.select(email_folder_to_search) #Doesnt like spaces in name of folder

    rv, data = mail.search(None, search_criteria)
    if rv != 'OK':
        print("No messages found!")

    email_messages = []
    for num in data[0].split():
        rv, data = mail.fetch(num, '(RFC822)')
        if rv != 'OK':
            print("ERROR getting message", num)
        raw_email = data[0][1] 
        raw_email_string = raw_email.decode('utf-8')
        msg = email.message_from_string(raw_email_string)
        body = ""

    #Getting Body 
        if msg.is_multipart():
            email_from = msg['from']
            email_subject = msg['subject']
            email_date = msg['Date']
            for part in msg.walk():
                ctype = part.get_content_type()
                cdispo = part.get_content_disposition()

                if ctype == 'text/plain':
                    bytes_body = part.get_payload(decode=True)
                    string_body = bytes_body.decode("utf-8") #converts message from bytes to string
                    # email_messages.append(string_body)

                    filePath = rf'{os.getcwd()}\emails.txt'
                    entire_email = (f'From: {email_from} \nDate:{email_date} \nSubject: {email_subject} \nMessage:\n{string_body}')
                    if not os.path.isfile(filePath):
                        with io.open(saved_emails_filename, 'w', encoding = 'utf-8') as opened_file:
                            opened_file.write(f'Added {entire_email}')
                    else:
                        with io.open(saved_emails_filename, 'a', encoding = "utf-8") as opened_file:
                            opened_file.write(entire_email)
                
        # downloading attachments
            for part in msg.walk():
                # this part comes from the snipped I don't understand yet... 
                if part.get_content_maintype() == 'multipart':
                    continue
                if part.get('Content-Disposition') is None:
                    continue
                fileName = part.get_filename() #The the name of the attahcment? I wonder if this works for pics, google docs?

                if bool(fileName):
                    filePath = os.path.join(r'C:\Users\reece\Desktop\codeSnippets\Automation', fileName)
                    if not os.path.isfile(filePath):
                        with open(fileName, 'wb') as opened_file:
                            byte_text = part.get_payload(decode=True)
                            opened_file.write(byte_text)
                            opened_file.close()

check_email('PythonTesting', 'ALL', 'testing.txt')