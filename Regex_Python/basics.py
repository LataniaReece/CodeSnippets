import re

#I used enter to make these all go to the next line, could affect it. If it does consider using word wrap 


#For this I am assuming the person will always put the street capital -> Then see what happens when you don't assume that?
string = ''' 
This is a sample sentence with someone's phone number: 865-321-3213 
and (232).321.3987. Their email address is Shawn890Mark@company.harvard.edu.
There are a few more email addresses in here There is also another sentence
with an email address JJ11234onson_$$@yahoo.com. Here is another email address
that I want you to match Zach12Za_123_asn@company.harvard.edu Here is another 
one deedee1212@gmail.com. And let's throw another phone number in here 617-321-3294. 
Wanted to add another phone number that utilizes spaces in between the sections so here is that example
943 439 5421. 

Here is also a paragraph listing all the street addresses.  I am going to start with 123 Main St and then I am going to go 
 with 3321 Alfonso Ave. because I want to make sure that I capture the period and not the period. 14 Auburn Road. is another
  good address to have in this. I'm sure that someone lives at 490 Branch Street so I am going to add that one too. Another address
   that I could add is 1 Blossom Avenue which is where Tony lives. Just randoms 43 Court Drive and 91 Cottage St

I later want to do websites. Will search the web for these. 

https://www.regular-expressions.info/index.html
www.coursera.org
https://www.google.com/search?q=courser&oq=courser&aqs=chrome..69i57j0j35i39j0l2j69i65l3.1004j0j1&sourceid=chrome&ie=UTF-8
https://www.pinterest.com/ 
http://www.bu.edu/
https://hunter.io/
https://www.usa.gov/
https://www.instagram.com/
https://outlook.live.com/mail/inbox This is an example of a website that isn't followed by 

((http|ftp|https)://)?[\w]+\.{1}([\w-]+)?(\.{1})?(com|info|io|edu|gov|org)((\w)+)?(/)?([\w.,@?^=%&:/~+#-]*)?

Q: why does adding a word boundary to this not do anything? Shouldnt it recognze that this should has to be preceded with a space?
How could I get this to not include the email addresss? Shouldn't word boundary make this work

+ means match as much as possible



'''
#((http|ftp|https)://)?[\w]+\.{1}([\w-]+)?(\.{1})?(com|info|io|edu|gov|org)((\w)+)?(/)?([\w.,@?^=%&:/~+#-]*)?
# from Simeon r'(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?' 
# # This is excluding the email addresses figure out why? Wha tis is he doiing that I am not doing? But it is not including the www.coursera.org

# r'(http|ftp|https)://
# ([\w_-]+
# (?:(?:\.[\w_-]+)+)) # do the question marks here mean make it nongreedy or optional?

# ([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?'


#Phone number pattern
# pattern = re.compile(r"(\(?\d{3}\)?)[-.\s]\d{3}[-.\s]\d{4}")
# numbers = pattern.finditer(string)

# for number in numbers: 
#     print(number) #prints the match object 
#     print(number.group(0)) #prints the entire thing
#     print(number.group(1)) #prints the area code 




#Email Address pattern
# pattern = re.compile(r"([-\w$]+)@([-\w$\.]+(\.\w)?(.com|.net|.edu))")
# emails = pattern.finditer(string)

# for email in emails: 
#     print(email) #prints the match object 
#     print(f'This is group 0: {email.group(0)}')
#     print(f'This is group 1: {email.group(1)}')
#     print(f'This is group 2: {email.group(2)}')
#     print(f'This is group 3: {email.group(3)}') #why is this skipping this group and going to group 4
#     print(f'This is group 4: {email.group(4)}')
#     print("")


pattern = re.compile(r"(www|https|http)(://)?([\w]+)?\.([\w-]+)?(\.)?([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?") #I did . version first (ie St. then St since it wasn't continuing to capture those without the .first )
addresses = pattern.finditer(string)

for address in addresses: 
    print(address) #prints the match object 
    print(f'This is group 0: {address.group(0)}')
    print(f'This is group 1: {address.group(1)}')
    # print(f'This is group 2: {email.group(2)}')
    # print(f'This is group 3: {email.group(3)}') #why is this skipping this group and going to group 4
    # print(f'This is group 4: {email.group(4)}')
    print("")


#my final pattern: (www|https|http)(://)?([\w]+)?\.([\w-]+)?(\.)?([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?
#Sim's pattern: (http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])? Does not capture www.coursera.org


# https://www.regular-expressions.info/index.html
# www.coursera.org
# https://www.google.com/search?q=courser&oq=courser&aqs=chrome..69i57j0j35i39j0l2j69i65l3.1004j0j1&sourceid=chrome&ie=UTF-8
# https://www.pinterest.com/ 
# http://www.bu.edu/
# https://hunter.io/
# https://www.usa.gov/
# https://www.instagram.com/
# https://outlook.live.com/mail/inbox 

# Shawn890Mark@company.harvard.edu
# JJ11234onson_$$@yahoo.com
# Zach12Za_123_asn@company.harvard.edu
# deedee1212@gmail.com

