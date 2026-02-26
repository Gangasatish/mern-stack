# CIDR - Classless Inter-domain routing
- IPv4 has a total of 32 bits
- /32 - Only one IP
- /24 - 256 IP addresses
- /16 - 65,526 IP addresses
- 0.0.0.0/0 - Entire internet

# Why was CIDR created?

Earlier, IP addresses were divided into fixed classes:
- class A
- class B
- class C

This wasted many IP addresses

CIDR was introduced to:
- Use our IP address more efficiently
- reduce internet routing table size

# Why do we need CIDR in mongoDB?
- To tell MongoDb how many IP addresses are allowed