function onMyScroll(){//�����¼�
            var frame = $("#frame");
             if ($(document).scrollTop()>$(".banner1").height()) {//������������banner1��ʱ����ʽ
                $("#iframe0").attr("class"," slideUp")
                
                frame.addClass("side_frame");
                frame.css("left",($("#text_left").offset().left+$("#text_left").width()+20)+"px");
                frame.css("top","20px");
                
             }
             else{
                 $("#iframe0").attr("class"," navbar-fixed-top slideDown")
                 frame.removeClass("side_frame");
             }
             
            
         }
         function articleClick(obj) {
            //�����ת
            var obj1 = $(obj);
            var html = obj1.attr("data-text");
              window.location.href = html;
         }
      