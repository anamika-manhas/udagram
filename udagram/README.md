# Udagram Image Filtering Microservice

## How to Run:
```
npm i
npm run dev
```

## Build for production
```
npm run build
```

## EB Deploy
```
cd www
eb init
# -> Give Region
# -> Give Application Name/Create new
#  -> Create new environment (Optional)
eb deploy
```

Endpoint:
http://devudacityudagramtest-env.ap-south-1.elasticbeanstalk.com/filteredimage?image_url=
http://devudacityudagramtest-env.ap-south-1.elasticbeanstalk.com/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg
