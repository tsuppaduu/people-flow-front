# WeFlow

We created a Bluetooth mesh network with smart sensors capable of detecting the number of people around them. This data is then displayed on a website or at info screens for instance during an event. 

Feasible applications for the data could be the following examples:

1.	The user can choose the shortest lines and best paths around the venue or the city
2.	The data can also be used to guide design and changes in the layout of the event or a city
3.	People flow data can be used to detect bottlenecks, which then can then be fixed by allocating resources more efficiently.
4.	The data can also be used to locate people who are stuck (for instance in a building) in case of an emergency, as the data of the network will be available through mesh networking even if the internet is down. 

We used state-of-the-art web development tools to visualize the data created by the mesh network (React + Node). For an example mesh node we used a raspberry pi, which scans the area using Bluetooth and approximates the number of people around it. Nevertheless, our back-end is device agnostic, as it can use different sensors, such as Wi-Fi for better estimates or cameras with machine learning.

In addition, it should be noted that the nodes are (solar) battery powered so they do not need constant external power. This is an important feature when considering emergencies.

You can see our powerpoint presentation from the following link: 
https://1drv.ms/p/s!Ah2-0rs8ef--sk-4q60XoNgTMpgL
