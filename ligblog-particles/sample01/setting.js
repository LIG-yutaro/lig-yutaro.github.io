particlesJS('hoge',{ 
    "particles":{
//--シェイプの設定----------
      "number":{
        "value":100,
        "density":{
          "enable":true,
          "value_area":5
        }
      },
      "shape":{
        "type":"circle"
      },
      "color":{
        "value":"#4cb8c4"
      },
      "opacity":{
        "value":1,
      },
      "size":{
        "value":1,
      },
//--------------------
 
//--線の設定----------
      "line_linked":{
        "enable":false
      },
//--------------------
 
//--動きの設定----------
      "move":{
        "speed":10,
        "out_mode":"bounce"
      }
//--------------------
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
//--マウスオーバー時の処理----------
        "onhover":{
          "enable":true,
          "mode":"repulse"
        },
//--------------------
 
//--クリック時の処理----------
        "onclick":{
          "enable":false
        }
//--------------------
      },
      "modes":{
//--シェイプがカーソルから逃げる----------
        "repulse":{
          "distance":50
        }
//--------------------
      }
    },
    "retina_detect":true,
    "resize":true
  }
);