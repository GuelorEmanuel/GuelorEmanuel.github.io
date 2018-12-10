---
# layout: post
# title: An Implementation of FTP using C/C++
# image: images/filetransfersystem.jpg
# month: "December"
# day: "12"
# year: "2015"

---
###  An Implementation of FTP using C/C++
# 2015/12/25
# Built using:&nbsp;C/C++

The purpose of this project was to  build a client–server file transfer system using the Socket API. The server is started on a specific number and listens for requests. The Client is started with the IP address and port number of the server. It sends requests to the server. The server handles the requests and returns replies to the client. The client handles the replies.

The System is inspired by Bash CLI. Using native bash commands, the user should be able to add, get and create files/directories on the server from the client computer.

#Example of requests:
1. ls: print on the client window a listing of the contents of the current directory on the server machine.
2. get remote-file:  retrieve  the  remote-file  on  the  server  and  store  it  on  the client machine. It is given the same name it has on the server machine.
3. put file-name: put and store the file from  the  client  machine  to the  server machine. On the server, it is given the same name it has on the client machine.
4. cd directory-name: change the on the server (“cd ..” also works)
5. mkdir directory-name: create  a  new sub-directory  named directory-name

This project enabled me to explore in depth the concept of TCP/IP, UDP, Socket Api and the type of strategies to take when handling any type of file transfer over the internet.
##[View/Dowload Source](https://github.com/GuelorEmanuel/C-CC-File-Transfer)
