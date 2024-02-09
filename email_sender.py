import smtplib

def emailsender(receiver,message):
    server = smtplib.SMTP('smtp.office365.com',587)
    server.ehlo()
    server.starttls()
    server.login('sameer_cum_sock@outlook.com', 'ilovecum123')
    server.Subject = 'Hello 123'
    server.BodyFormat = 1
    sender="sameer_cum_sock@outlook.com"
    #Adding a newline before the body text fixes the missing message body
    server.sendmail(sender,receiver,f'{message}')
    server.quit()



