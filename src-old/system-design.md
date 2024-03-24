# System Design

- A great tutorial with microsoft is [here](https://learn.microsoft.com/en-us/azure/architecture/patterns/)
- Another greate tutorial is [here](https://microservices.io/patterns/index.html)

## Questions

- api gateway
- Micro Service Vs Service Oriented
- deployment strategies
- distributed tracing (agent vs collector)
- OTEL
- HA
- load balancing (Nginx and HA Proxy)
- go to conferences from youtube channel
- design location platform like uber
- consideration for URL shortner application
- Circuit breaker
- Event Bus
- [CAP theorem](https://www.youtube.com/watch?v=_RbsFXWRZ10)

- what do you do to handle 100k rps to a server? bandwidth of the datacenter will be fulfilled.

## Concepts

- [rate limiting](https://medium.com/@surajshende247/api-rate-limiting-101-3b60213860fe)
- [gcra](https://itnext.io/building-a-smart-faq-application-with-golang-langchain-redis-openai-part-1-intelligent-6f7fddaaffa0)

- locks - mutex - semaphor
- <https://www.linkedin.com/advice/0/what-some-common-distributed-locking-patterns>
- [Distributed Locks](https://www.youtube.com/watch?v=v7x75aN9liM)
- <https://davidecerbo.medium.com/everything-i-know-about-distributed-locks-2bf54de2df71>
- [Pessimistic vs Optimistic lock](https://www.youtube.com/watch?v=R-iX1r_7UY0)

- Distributed transactions [here](https://developers.redhat.com/blog/2018/10/01/patterns-for-distributed-transactions-within-a-microservices-architecture) and [here](https://www.youtube.com/watch?v=vGOEO6mO674) and [here](https://microservices.io/patterns/data/saga.html)
- [Two-Phase Commit (2PC), Three-Phase Commit (3PC), SAGA Pattern](https://www.youtube.com/watch?v=ET_DnJgfplY)

- [Distributed Cache](https://www.youtube.com/watch?v=iuqZvajTOyA)

- Backpressure in message-queues

## Concrete example

- [design youtube](https://www.youtube.com/watch?v=akXP6pC0piE)

- [design spotify](https://www.youtube.com/watch?v=_K-eupuDVEc)

- [design twitter](https://www.youtube.com/watch?v=o5n85GRKuzk)

- design url shortner application

- design inventory managment system to handle high load

- design a system like digikala to sell only 2 iphones with 1 dollar?
  - what is distributed locking (between instances)? we can use Mutex for only one instance
  - what is locking in database
  - what is transaction in RDBMS exactly? isolation

- design an emailing system like gmail to replace it? how to handle lots of requests? file attachment? synchronous and async communication to handle user requests to send an email.
