define({ "api": [
  {
    "type": "get",
    "url": "https://vendor.mytoch.com/api/v1/ai/request/get/image/v2",
    "title": "Get Images",
    "name": "GetImages",
    "group": "Image_Analysis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Users unique api-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "secretKey",
            "description": "<p>Users unique secretKey.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ai_options_data",
            "description": "<p>video analysis data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "=\"scene\""
            ],
            "optional": false,
            "field": "options",
            "description": "<p>Selected option for analyses.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Video creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "request_date",
            "description": "<p>Request date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Video title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Video url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vendorId",
            "description": "<p>Users unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>api version</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Video key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   Common Response\n        HTTP/1.1 200 OK\n        message: \"Requests found.\"\n        requests:[ \n              {\n               ai_options_data: [{,…}]\n \t\tcreatedDate: \"2020-12-24T07:52:27.024Z\"\n \t\toptions: [\"scene\"]\n\t\trequestId: \"rQHWVuEnS\"\n \t\trequest_date: \"Dec 24 2020\"\n \t\tstatus: \"completed\"\n\t\ttitle: \"Test Test Test\"\n\t\ttype: \"video\"\n \t\turl: \"https://toch-mumbai.s3-ap-south-1.amazonaws.com/ai_videos/download (5).jpg.jpeg\"\n\t\tvendorId: \"r46NEGQrH\"\n\t\tversion: \"v2\"\n\t\t_id: \"5fe448bb0835cb21c0046be4\"\n              },\n      {\n \t\tai_options_data: [{,…}]\n \t\tcreatedDate: \"2020-12-23T06:41:56.906Z\"\n \t\toptions: [\"scene\"]\n \t\trequestId: \"bTSHTOR9x\"\n \t\trequest_date: \"Dec 23 2020\"\n \t\tstatus: \"completed\"\n \t\ttitle: \"Demo Scene\"\n \t\ttype: \"video\"\n \t\turl: \"https://toch-mumbai.s3-ap-south-1.amazonaws.com/ai_videos/download (6).jpg.jpeg\"\n \t\tvendorId: \"r46NEGQrH\"\n \t\tversion: \"v2\"\n \t\t_id: \"5fe2e6b468b1d2e8bafc1d29\"\n              }]\n       success: true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VideoFetchFailed",
            "description": "<p>Video fetching failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"succes\" : false\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Image_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v2/ai/request/create",
    "title": "Shoppable image",
    "description": "<p>Use to make shoappable image</p>",
    "name": "ShoppableImage",
    "group": "Image_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_url",
            "description": "<p>video url in mp4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"shoppable\""
            ],
            "optional": false,
            "field": "ai_options",
            "description": "<p>Select atleast one and max all option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "String",
            "description": "<p>domain This for webhook to get annotaion callback.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>v2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>image</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Specific user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\n\"type\" : \"shoppable\"\n        \"url \" : \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/image_analysis/kAmjmO3dA/shoppable_json.json\"\n\"createdDate\" : \"2020-12-21T07:39:23.487Z\"\n  \t    \"options\" : [\"shoppable\"]\n\"requestId\" : \"kAmjmO3dA\"\n  \t    \"request_date\" : \"Dec 21 2020\"\n\"status\" : \"completed\"\n\"title\" : \"Demo Test\"\n\"type\" : \"image\"\n\t    \"url\" : \"https://toch-mumbai.s3-ap-south-1.amazonaws.com/ai_videos/images (10).jpg.jpeg\"\n\"vendorId\" : \"r46NEGQrH\"\n\"version\" : \"v2\"\n\"_id\" : \"5fe0512b081ddb2e1c2aff56\"\n     }\n\n\n\n\nSample Of analysis json:\n{\"detection_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/image_analysis/kAmjmO3dA/detection.jpg\", \"data\": [{\"box\": [31, 21, 161, 204], \"gender\": \"\", \"matching\": [{\"price\": \"INR 1259.00\", \"_id\": \"1676645534\", \"link\": \"http://www.myntra.com/Tops/DOROTHY-PERKINS/DOROTHY-PERKINS-Women-Black-Solid-Bardot-Top/7258229/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/7258229/2018/9/10/fc7a795c-fdc7-4e34-9c86-4125f085d0d71536562134691-DOROTHY-PERKINS-Women-Tops-8331536562134557-1.jpg\", \"name\": \"DOROTHY PERKINS Women Black Solid Bardot Top\"}, {\"price\": \"INR 949.00\", \"_id\": \"1698422122\", \"link\": \"http://www.myntra.com/Tops/ISU/ISU-Women-Black-Self-Design-Top/9899765/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/productimage/2019/6/4/a2621f15-10ec-4fcf-96ba-359b97880b111559670556952-1.jpg\", \"name\": \"ISU Women Black Self Design Top\"}, {\"price\": \"INR 755.00\", \"_id\": \"1691773671\", \"link\": \"http://www.myntra.com/Tops/RARE/RARE-Women-Black-Solid-Top/10106775/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/productimage/2019/6/20/22a05015-7a57-4f21-b6db-bc820c8bfe051560986848654-1.jpg\", \"name\": \"RARE Women Black Solid Top\"}, {\"price\": \"INR 899.00\", \"_id\": \"1708837578\", \"link\": \"http://www.myntra.com/Tops/Park-Avenue-Woman/Park-Avenue-Woman-Black-Solid-Bardot-Top/1919022/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/1919022/2017/6/16/11497609826930-Park-Avenue-Woman-Women-Tops-5471497609825821-1.jpg\", \"name\": \"Park Avenue Woman Black Solid Bardot Top\"}, {\"price\": \"INR 719.00\", \"_id\": \"1684330281\", \"link\": \"http://www.myntra.com/Tops/AkaAyu/AkaAyu-Women-Black-Solid-Bardot-Top/10845372/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/productimage/2019/10/21/c9cb18c4-4e08-4ea8-9250-35bc0cafbc6a1571636758873-1.jpg\", \"name\": \"AkaAyu Women Black Solid Bardot Top\"}, {\"price\": \"INR 1,434\", \"_id\": \"B07MN9TJB5\", \"link\": \"https://www.amazon.in/Park-Avenue-Womens-Regular-PWAC01605-K8_Black_96/dp/B07MN9TJB5/ref=sr_1_8875?dchild=1&qid=1582268723&s=apparel&sr=1-8875\", \"picurl\": \"https://m.media-amazon.com/images/I/81e6AdX9AxL._AC_UL320_ML3_.jpg\", \"name\": \"Park Avenue Women's Plain Regular fit Top\"}, {\"price\": \"INR 674\", \"_id\": \"B07751K7PG\", \"link\": \"https://www.amazon.in/Dresserys-Womens-Chiffon-Line-TDC1030ZBT_Black_XXL/dp/B07751K7PG/ref=sr_1_18137?dchild=1&qid=1582269452&s=apparel&sr=1-18137\", \"picurl\": \"https://m.media-amazon.com/images/I/81qlaT+7aYL._AC_UL320_ML3_.jpg\", \"name\": \"Dressery's Women's Chiffon A-Line Short Top\"}, {\"price\": \"INR 674\", \"_id\": \"B0765V2P7V\", \"link\": \"https://www.amazon.in/Ayaki-Women-Black-Solid-Thermal/dp/B0765V2P7V/ref=sr_1_3175?dchild=1&qid=1582268333&s=apparel&sr=1-3175\", \"picurl\": \"https://m.media-amazon.com/images/I/61d0Yv65ywL._AC_UL320_ML3_.jpg\", \"name\": \"Ayaki by (Bodycare) Women Black Solid Thermal Top\"}, {\"price\": \"INR 299\", \"_id\": \"B07KNNKVP4\", \"link\": \"https://www.amazon.in/FAB-STAR-Womens-Stylish-Rayon/dp/B07KNNKVP4/ref=sr_1_14983?dchild=1&qid=1582269220&s=apparel&sr=1-14983\", \"picurl\": \"https://m.media-amazon.com/images/I/71XczmFICpL._AC_UL320_ML3_.jpg\", \"name\": \"FAB STAR Womens Rayon top\"}, {\"price\": \"INR 628.\", \"_id\": \"B07WCKC7JR\", \"link\": \"https://www.amazon.in/mayra-Womens-Plain-Regular-1907D17265_Black_M/dp/B07WCKC7JR/ref=sr_1_16142?dchild=1&qid=1582269305&s=apparel&sr=1-16142\", \"picurl\": \"https://m.media-amazon.com/images/I/61VGlrVX0+L._AC_UL320_ML3_.jpg\", \"name\": \"mayra Women's Regular fit Top\"}], \"label\": \"top\"}, {\"box\": [17, -3, 173, 252], \"gender\": \"\", \"matching\": [], \"label\": \"person\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>The url of the source was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : \"500\"\n  \"error\": \"SourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Image_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v2/ai/request/create",
    "title": "Content category detection",
    "description": "<p>Video analysise for object detection,category classification,brand classification,sensitive content detection.</p>",
    "name": "Contentcategorydetection",
    "group": "Video_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_url",
            "description": "<p>video url in mp4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"object_classification\"",
              "\"category_classification\"",
              "\"brand_classification\"",
              "\"sensitive_content\""
            ],
            "optional": false,
            "field": "ai_options",
            "description": "<p>Select atleast one and max all option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>This for webhook to get video progress status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>v2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Specific user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    Common Response\n      HTTP/1.1 200 OK\n      {\n        \"status\": \"200\",\n       \"result\": \"Analysis Start\"\n      }\n\n    \n    Sample Progress call back on webhook\n{ \n \t\"userId\": 'r46NEGQrH', \n\"label\": 'progress', \n\"requestId\": 'eeVpWD-vP', \n\"data\": {'category_classification': 90}\n       } \n\n    Sample Of analysis json:\n[{\"actor_label\": \"\", \"emotion_label\": \"\", \"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/gif_0.gif\", \"s_ts\": 0.0, \"scene_id\": 0, \"shot_label\": \"\", \"st_hms\": \"00:00:00\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/video_0.mp4\", \"et_hms\": \"00:00:00\", \"e_ts\": 240.0}, {\"actor_label\": \"\", \"emotion_label\": \"\", \"object_label\": \"acc,paytm,dream11\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/gif_1.gif\", \"s_ts\": 240.0, \"scene_id\": 1, \"shot_label\": \"\", \"st_hms\": \"00:00:00\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/video_1.mp4\", \"et_hms\": \"00:00:08\", \"e_ts\": 8400.0}, {\"actor_label\": \"\", \"emotion_label\": \"\", \"object_label\": \"Person,\"accident,blood\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/gif_2.gif\", \"s_ts\": 8400.0, \"scene_id\": 2, \"shot_label\": \"\", \"st_hms\": \"00:00:08\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/video_2.mp4\", \"et_hms\": \"00:00:09\", \"e_ts\": 9600.0}, {\"actor_label\": \"\", \"emotion_label\": \"\", \"object_label\": \"paytm,byjus\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/gif_3.gif\", \"s_ts\": 9600.0, \"scene_id\": 3, \"shot_label\": \"\", \"st_hms\": \"00:00:09\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/video_3.mp4\", \"et_hms\": \"00:00:11\", \"e_ts\": 11280.0}, {\"actor_label\": \"\", \"emotion_label\": \"\", \"object_label\": \"nike,dream11,paytm,\"accident,blood\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/gif_4.gif\", \"s_ts\": 11280.0, \"scene_id\": 4, \"shot_label\": \"\", \"st_hms\": \"00:00:11\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/video_4.mp4\", \"et_hms\": \"00:00:14\", \"e_ts\": 14880.0}, {\"actor_label\": \"\", \"emotion_label\": \"\", \"object_label\": \"paytm,dream11\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/gif_5.gif\", \"s_ts\": 14880.0, \"scene_id\": 5, \"shot_label\": \"\", \"st_hms\": \"00:00:14\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5f85bca2062b31312d17aed8/video_frame/video_5.mp4\", \"et_hms\": \"00:00:15\", \"e_ts\": 15000.0}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>The url of the source was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : \"500\"\n  \"error\": \"SourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v1/ai/request/remove",
    "title": "Delete video",
    "name": "DeleteVideo",
    "group": "Video_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>request unique id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Api version.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\t\n         \"message\": \"Request removed successfully.\"\n         \"success\": true\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"succes\" : false\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v1/ai/request/edit",
    "title": "Edit Videos",
    "name": "EditVideorequest",
    "group": "Video_Analysis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Users unique api-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "secretKey",
            "description": "<p>Users unique secretKey.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ai_options_data",
            "description": "<p>video analysis data.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"scene\""
            ],
            "optional": false,
            "field": "options",
            "description": "<p>Selected option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Video creation date.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request_date",
            "description": "<p>Request date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Video title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Video url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vendorId",
            "description": "<p>Users unique id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>api version</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Total_time_taken",
            "description": "<p>Time taken on process video.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Video key</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"completed\"",
              "\"inprogress\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>Video analysis status</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\t\n         \"message\": \"AI Request Edited Succefully.\"\n         \"success\": true\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RequestEditFailed",
            "description": "<p>Video edit failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"succes\" : false\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v2/ai/request/create",
    "title": "Embed Ad",
    "description": "<p>Video analysise for palce ad at empty location on video</p>",
    "name": "EmbedAd",
    "group": "Video_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_url",
            "description": "<p>video url in mp4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"embed_ads\""
            ],
            "optional": false,
            "field": "ai_options",
            "description": "<p>Select atleast one and max all option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>This for webhook to get video progress status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>v2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Specific user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\n        \"status\": \"200\",\n        \"result\": \"Analysis Start\"\n     }\n\n\nSample Progress call back on webhook\n    { \n        \"userId\": 'r46NEGQrH', \n        \"label\": 'progress', \n        \"requestId\": 'eeVpWD-vP', \n        \"data\": {'embed_ads': 90}\n    } \n\nSample Of analysis json:\n[{\"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/ad-place/E0GRBENRx/final_0.mp4\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>The url of the source was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : \"500\"\n  \"error\": \"SourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "get",
    "url": "https://vendor.mytoch.com/api/v1/ai/request/get/video/v2",
    "title": "Get Videos",
    "name": "GetVideos",
    "group": "Video_Analysis",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "apiKey",
            "description": "<p>Users unique api-key.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "secretKey",
            "description": "<p>Users unique secretKey.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ai_options_data",
            "description": "<p>video analysis data.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "allowedValues": [
              "=\"scene\""
            ],
            "optional": false,
            "field": "options",
            "description": "<p>Selected option for analyses.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Video creation date.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "request_date",
            "description": "<p>Request date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Video title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Video url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "vendorId",
            "description": "<p>Users unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>api version</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Video key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   Common Response\n        HTTP/1.1 200 OK\n        message: \"Requests found.\"\n        requests:[ \n              {\n               ai_options_data: [{,…}]\n \t\tcreatedDate: \"2020-12-24T07:52:27.024Z\"\n \t\toptions: [\"scene\"]\n\t\trequestId: \"rQHWVuEnS\"\n \t\trequest_date: \"Dec 24 2020\"\n \t\tstatus: \"completed\"\n\t\ttitle: \"Test Test Test\"\n\t\ttype: \"video\"\n \t\turl: \"https://toch-mumbai.s3.ap-south-1.amazonaws.com/iou-tracking/1.mp4\"\n\t\tvendorId: \"r46NEGQrH\"\n\t\tversion: \"v2\"\n\t\t_id: \"5fe448bb0835cb21c0046be4\"\n              },\n      {\n \t\tai_options_data: [{,…}]\n \t\tcreatedDate: \"2020-12-23T06:41:56.906Z\"\n \t\toptions: [\"scene\"]\n \t\trequestId: \"bTSHTOR9x\"\n \t\trequest_date: \"Dec 23 2020\"\n \t\tstatus: \"completed\"\n \t\ttitle: \"Demo Scene\"\n \t\ttype: \"video\"\n \t\turl: \"https://toch-mumbai.s3.ap-south-1.amazonaws.com/iou-tracking/1.mp4\"\n \t\tvendorId: \"r46NEGQrH\"\n \t\tversion: \"v2\"\n \t\t_id: \"5fe2e6b468b1d2e8bafc1d29\"\n              }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VideoFetchFailed",
            "description": "<p>Video fetching failed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"succes\" : false\n  \"message\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v2/ai/request/create",
    "title": "Scene Extraction",
    "description": "<p>This api use to analyse a video for specific option, You can submit a video url and it returns the json according to specific option.</p>",
    "name": "SceneExtractionOnly",
    "group": "Video_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_url",
            "description": "<p>video url in mp4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"scene\""
            ],
            "optional": false,
            "field": "ai_options",
            "description": "<p>Select atleast one and max all option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>This for webhook to get video progress status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>v2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Specific user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\n        \"status\": \"200\",\n        \"result\": \"Analysis Start\"\n     }\n\n\nSample Progress call back on webhook\n    { \n        \"userId\": 'r46NEGQrH', \n        \"label\": 'progress', \n        \"requestId\": 'eeVpWD-vP', \n        \"data\": {'scene': 90}\n    } \n\nSample Of analysis json:\n[[{\"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/gif_0.gif\", \"s_ts\": 0.0, \"et_hms\": \"00:00:12\", \"e_ts\": 12762.566735112938, \"scene_id\": 0, \"emotion_label\": \"\", \"st_hms\": \"00:00:00\", \"actor_label\": \"\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/video_0.mp4\", \"shot_label\": \"\"}, {\"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/gif_1.gif\", \"s_ts\": 12762.566735112938, \"et_hms\": \"00:00:17\", \"e_ts\": 17016.755646817248, \"scene_id\": 1, \"emotion_label\": \"\", \"st_hms\": \"00:00:12\", \"actor_label\": \"\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/video_1.mp4\", \"shot_label\": \"\"}, {\"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/gif_2.gif\", \"s_ts\": 17016.755646817248, \"et_hms\": \"00:00:18\", \"e_ts\": 18768.480492813145, \"scene_id\": 2, \"emotion_label\": \"\", \"st_hms\": \"00:00:17\", \"actor_label\": \"\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/video_2.mp4\", \"shot_label\": \"\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>The url of the source was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : \"500\"\n  \"error\": \"SourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v2/ai/request/create",
    "title": "Shoppable Video",
    "description": "<p>This api use to tag shoppable product on video using mayntra and amazon fashion product db</p>",
    "name": "ShoppableVideo",
    "group": "Video_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_url",
            "description": "<p>video url in mp4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"shoppable\""
            ],
            "optional": false,
            "field": "ai_options",
            "description": "<p>Select atleast one and max all option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>This for webhook to get video progress status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>v2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Specific user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\n        \"status\": \"200\",\n        \"result\": \"Analysis Start\"\n     }\n\n\nSample Progress call back on webhook\n    { \n        \"userId\": 'r46NEGQrH', \n        \"label\": 'progress', \n        \"requestId\": 'eeVpWD-vP', \n        \"data\": {'shoppable': 90}\n    } \n\nSample Of analysis json:\n[[{\"gif_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fd7149d59fc7004426ad29d/scene_0/gif_0.gif\", \"name\": \"scene_0\", \"url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fd7149d59fc7004426ad29d/scene_0/frame_0.jpg\", \"end_ms\": 1793, \"match_ms\": 7036009, \"activites\": [], \"products\": [{\"trackIdForScene\": \"0_13\", \"segmentId\": \"13\", \"currentTime\": 0.0, \"color\": \"#ffffff\", \"gender\": \"\", \"imageUrl\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fd7149d59fc7004426ad29d/scene_0/fashion_obj_0.jpg\", \"feature\": \"-0.057990338653326035,-0.16004851460456848\",\"matching\": {\"price\": \"INR 676.00\", \"_id\": \"1679665237\", \"link\": \"http://www.myntra.com/Dresses/QUIERO/QUIERO-Women-Off-White--Pink-Floral-Print-A-Line-Dress/7669831/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/7669831/2018/11/19/2c2f57bc-7b48-47f3-ad62-2e96f7eb36001542621363059-QUIERO-Women-Dresses-2181542621362921-1.jpg\", \"name\": \"QUIERO Women Off-White & Pink Floral Print A-Line Dress\"}, {\"price\": \"INR 1723.00\", \"_id\": \"1683869619\", \"link\": \"http://www.myntra.com/Dresses/CUTECUMBER/CUTECUMBER-Girls-Peach-Coloured-Embellished-Maxi-Dress/7207986/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/7207986/2018/8/23/8806521f-2a45-4077-aed6-076fa9c836931535009750315-Girls-Dresses-351535009750157-1.jpg\", \"name\": \"CUTECUMBER Girls Peach-Coloured Embellished Maxi Dress\"}, {\"price\": \"INR 989.00\", \"_id\": \"1699583906\", \"link\": \"http://www.myntra.com/Dresses/HERENOW/HERENOW-Women-Beige-Printed-Fit-and-Flare-Dress/11130992/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/11130992/2020/1/13/50b3da4a-9f3b-4cee-97eb-d1689739eb6f1578918311876-HERENOW-Women-Dresses-5231578918309706-1.jpg\", \"name\": \"HERE&NOW Women Beige Printed Fit and Flare Dress\"}, {\"price\": \"INR 1947.00\", \"_id\": \"1709915189\", \"link\": \"http://www.myntra.com/Dresses/CUTECUMBER/CUTECUMBER-Girls-Peach-Coloured-Embellished-Maxi-Dress/7207950/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/7207950/2018/8/23/7642b8a2-a3dc-4a40-8962-6417a566ed381535009561106-Girls-Dresses-6761535009560986-1.jpg\", \"name\": \"CUTECUMBER Girls Peach-Coloured Embellished Maxi Dress\"}, {\"price\": \"INR 944.00\", \"_id\": \"1701673141\", \"link\": \"http://www.myntra.com/Dresses/Vero-Moda/Vero-Moda-Women-Off-White-Printed-A-Line-Dress/1649092/buy\", \"picurl\": \"https://assets.myntassets.com/h_640,q_100,w_480/assets/images/1649092/2018/1/19/11516341542718-Vero-Moda-Women-Off-White-Printed-A-Line-Dress-8221516341542552-1.jpg\", \"name\": \"Vero Moda Women Off-White Printed A-Line Dress\"}, {\"price\": \"INR 449\", \"_id\": \"B07DSR3ZDZ\", \"link\": \"https://www.amazon.in/Sugr-Unlimited-Womens-Knee-long-276425587_OFF-WHITE_XL_SL/dp/B07DSR3ZDZ/ref=sr_1_7336?dchild=1&qid=1582264992&s=apparel&sr=1-7336\", \"picurl\": \"https://m.media-amazon.com/images/I/8189XUDUt4L._AC_UL320_ML3_.jpg\", \"name\": \"Sugr by Unlimited Women's Body Con Knee-long Dress\"}, {\"price\": \"INR 679\", \"_id\": \"B07FXBWZL3\", \"link\": \"https://www.amazon.in/StyleStone-Georgette-a-line-Dress-3317GrnSpringMaxiL_Green_Large/dp/B07FXBWZL3/ref=sr_1_4907?dchild=1&qid=1582264884&s=apparel&sr=1-4907\", \"picurl\": \"https://m.media-amazon.com/images/I/61FUP-c09SL._AC_UL320_ML3_.jpg\", \"name\": \"StyleStone Georgette a-line Dress\"}, {\"price\": \"INR 599\", \"_id\": \"B084ZGJHM5\", \"link\": \"https://www.amazon.in/Exxelo-Women-Blue-Sleeves-Dress/dp/B084ZGJHM5/ref=sr_1_11955?dchild=1&qid=1582299542&s=apparel&sr=1-11955\", \"picurl\": \"https://m.media-amazon.com/images/I/81d-MEdH7zL._AC_UL320_ML3_.jpg\", \"name\": \"Exxelo Women Blue Half Sleeves Midi Dress\"}, {\"price\": \"INR 988\", \"_id\": \"B07MBPTKH6\", \"link\": \"https://www.amazon.in/BIBA-Cotton-Dresses-14875_Off-White_36/dp/B07MBPTKH6/ref=sr_1_928?dchild=1&qid=1582264713&s=apparel&sr=1-928\", \"picurl\": \"https://m.media-amazon.com/images/I/61LrRVEWrZL._AC_UL320_ML3_.jpg\", \"name\": \"BIBA Cotton a-line Dress\"}, {\"price\": \"INR 1,195\", \"_id\": \"B07MPQRNPR\", \"link\": \"https://www.amazon.in/BIBA-Cotton-line-Dresses-14896_White_38/dp/B07MPQRNPR/ref=sr_1_6158?dchild=1&qid=1582264943&s=apparel&sr=1-6158\", \"picurl\": \"https://m.media-amazon.com/images/I/6179z0+D+iL._AC_UL320_ML3_.jpg\", \"name\": \"BIBA Cotton a-line Dress\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>The url of the source was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : \"500\"\n  \"error\": \"SourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  },
  {
    "type": "post",
    "url": "https://vendor.mytoch.com/api/v2/ai/request/create",
    "title": "Face Detection and Recognition",
    "description": "<p>Video analysise for face detection and human recognition in give video.</p>",
    "name": "facedetectionandrecognition",
    "group": "Video_Analysis",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_url",
            "description": "<p>video url in mp4.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "=\"face_recognition\""
            ],
            "optional": false,
            "field": "ai_options",
            "description": "<p>Select atleast one and max all option for analyses.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": "<p>This for webhook to get video progress status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "v_id",
            "description": "<p>Unique video id to mantaine video refrence</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestId",
            "description": "<p>Unique request to manage the status of request</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>v2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>video</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Specific user id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Request result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "Common Response\n     HTTP/1.1 200 OK\n     {\n        \"status\": \"200\",\n        \"result\": \"Analysis Start\"\n     }\n\n\nSample Progress call back on webhook\n    { \n        \"userId\": 'r46NEGQrH', \n        \"label\": 'progress', \n        \"requestId\": 'eeVpWD-vP', \n        \"data\": {'face_recognition': 90}\n    } \n\nSample Of analysis json:\n[[{\"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/gif_0.gif\", \"s_ts\": 0.0, \"et_hms\": \"00:00:12\", \"e_ts\": 12762.566735112938, \"scene_id\": 0, \"emotion_label\": \"\", \"st_hms\": \"00:00:00\", \"actor_label\": \"amitabh bachhan\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/video_0.mp4\", \"shot_label\": \"\"}, {\"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/gif_1.gif\", \"s_ts\": 12762.566735112938, \"et_hms\": \"00:00:17\", \"e_ts\": 17016.755646817248, \"scene_id\": 1, \"emotion_label\": \"\", \"st_hms\": \"00:00:12\", \"actor_label\": \"johnny depp\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/video_1.mp4\", \"shot_label\": \"\"}, {\"object_label\": \"\", \"gif\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/gif_2.gif\", \"s_ts\": 17016.755646817248, \"et_hms\": \"00:00:18\", \"e_ts\": 18768.480492813145, \"scene_id\": 2, \"emotion_label\": \"\", \"st_hms\": \"00:00:17\", \"actor_label\": \"\", \"scene_url\": \"https://s3.ap-south-1.amazonaws.com/toch-mumbai/video_analysis/5fe024cc1a0577d6784b4455/video_frame/video_2.mp4\", \"shot_label\": \"\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SourceNotFound",
            "description": "<p>The url of the source was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\" : \"500\"\n  \"error\": \"SourceNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc.py",
    "groupTitle": "Video_Analysis"
  }
] });
