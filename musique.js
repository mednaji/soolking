 for(var v=1;v<=6;v++){
    vid.innerHTML+='<video controls="" value="'+v+'" id="msq'+v+'"style="display: none;">'+
  '<source src="msq ('+v+').mp3" type="audio/mpeg" id="msqsrc'+v+'">'+
  '</video>';
   }
   
   for(var d=1;d<=6;d++){
    sec.innerHTML+='<div id="div'+d+'"><img src="img ('+d+').jpg">'+
      '<p id="p'+d+'"">Dhurata_Dora_Soolking_ZemÃ</p><i class="fa fa-play" id="i'+d+'"></i></div>'
   }
   
   $("#p2").text('Algérino_Adios_Soolking');
   $("#p3").text('GLK_Sinaloa_Soolking_Koba');
   $("#p4").text('Sifax_peine_Soolking');
   $("#p5").text('Soolking_Milano_prod_Slembeatz');
   $("#p6").text('Soolking_Ouled_Bahdja_Liberté');
//  playlist=document.getElementById('playlist'),
 var z=0,p=0,i=1,
 msqsrc1= document.getElementById("msqsrc1"),
 msqsrc2= document.getElementById("msqsrc2"),
 msq1=document.getElementById("msq1");
  msq2=document.getElementById("msq2");
   msq3=document.getElementById("msq3");
  msq4=document.getElementById("msq4");
   msq5=document.getElementById("msq5");
  msq6=document.getElementById("msq6");
   vid=document.getElementById("vid");
   sec=document.getElementById("sec");
$(function() {
  

  function next(a1,a2,a3,a4,a5,a6,b1,c1,ix,divx){
         a1.play();
         a2.pause();
         a3.pause();
         a4.pause();
         a5.pause();
         a6.pause();
         $(".myimg").attr('src','img ('+b1+').jpg');
         $("#title").text(c1);
         $("section div i").attr('class','fa fa-play');
          $(ix).attr('class','fa fa-pause');
          $("section div").css("box-shadow","none");
          $(divx).css("box-shadow","0px 0px 5px 1px #E9E9EF");
    }

    // function prev(a1,a2,a3,a4,a5,a6,b1,c1){
    //      a1.play();
    //      a2.pause();
    //      a3.pause();
    //      a4.pause();
    //      a5.pause();
    //      a6.pause();
    //      $(".myimg").attr('src','imgs/img ('+b1+').jpg');
    //      $("h3").text(c1);
    // }
  
 
    function play(pm,ix){
     if (z==0) { pm.play(); z=1 ;
      $("#pause").attr('class','fa fa-pause');
      $(ix).attr('class','fa fa-pause')}




else if (z==1) { pm.pause(); z=0;$("#pause").attr('class','fa fa-play');$(ix).attr('class','fa fa-play')}
    }




  $(".fa-angle-double-right").click(
    function(){
      if (i>=1 && i<6) {
        $(".myimg").hide();
      $(".myimg").fadeIn(500);
      }
      switch (i){
        case 1: { i++; $(".fa-angle-double-left").css({'color':'#e2902f','cursor':'pointer'});
                next(msq2,msq1,msq3,msq4,msq5,msq6,'2',"L'Algérino_Adios_Soolking","#i2","section #div2")} break;
        case 2: { i++; 
          next(msq3,msq1,msq2,msq4,msq5,msq6,'3',"GLK_Sinaloa_Soolking_Koba","#i3","section #div3")} break;
        case 3: { i++; 
          next(msq4,msq1,msq2,msq3,msq5,msq6,'4',"Sifax_peine_Soolking","#i4","section #div4")} break;
        case 4: { i++; 
          next(msq5,msq1,msq2,msq4,msq3,msq6,'5',"Soolking_Milano_prod_Slembeatz","#i5","section #div5")} break;
        case 5: { i++; $(this).css({'color':'#e8e8e8','cursor':'not-allowed'});
            next(msq6,msq1,msq2,msq3,msq5,msq5,'6',"Soolking_Ouled_Bahdja_Liberté","#i6","section #div6")} break;
      }
    }
    );


 $(".fa-angle-double-left").click(
    function(){
      if (i>1) {$(".myimg").hide();
      $(".myimg").fadeIn(500);}
    switch (i){
      case 6: { i--;$(".fa-angle-double-right").css({'color':'#e2902f','cursor':'pointer'});
       next(msq5,msq1,msq3,msq4,msq2,msq6,'5',"Soolking_Milano_prod_Slembeatz","#i5","section #div5")} break;
    case 5: { i--; next(msq4,msq1,msq2,msq3,msq5,msq6,'4',"GLK_Sinaloa_Soolking_Koba","#i4","section #div4")} break;
    case 4: { i--; next(msq3,msq1,msq2,msq4,msq5,msq6,'3',"Sifax_peine_Soolking","#i3","section #div3")} break;
    case 3: { i--; next(msq2,msq1,msq3,msq4,msq3,msq6,'2',"Soolking_Milano_prod_Slembeatz","#i2","section #div2")} break;
    case 2: { i--; $(this).css({'color':'#e8e8e8','cursor':'not-allowed'});
          next(msq1,msq6,msq2,msq3,msq5,msq5,'1',"Soolking_Ouled_Bahdja_Liberté","#i1","section #div1")} break;
      }
    }
  );

$("#pause").click(
       function(){
        switch (i){
          case 1:{play(msq1,"#i1"); $("#div1").css("box-shadow","0px 0px 5px 1px #E9E9EF") }break;
          case 2:{play(msq2,"#i2");} break;
          case 3:{play(msq3,"#i3");} break;
          case 4:{play(msq4,"#i4"); }break;
          case 5:{play(msq5,"#i5");} break;
          case 6:{play(msq6,"#i6"); }break;
       }
     });

 $("#menu").click(
   function(){ 
    if (p==0) {
      $(this).attr('class','fa fa-angle-right');
      $(this).css({"left":"21em",'transform':'rotate(180deg)','top':'2em'});
      $("section").css("left","0");
      $("section div").css("left","10%");
      p=1;
    }
    else if (p==1) {
      $(this).attr('class','fa fa-align-justify');
      $(this).css({"left":"1em",'transform':'rotate(0deg)'});
      $("section").css("left","-65%");
      $("section div").css("left","-40%");p=0;
    }}
  );

  $("#i1").click(
  function(){if (i==1)  play(msq1,"#i1"); 
  else {next(msq1,msq6,msq2,msq3,msq5,msq5,'1',"Soolking_Ouled_Bahdja_Liberté","#i1","section #div1");i=1}});

  $("#i2").click(
  function(){if (i==2)  play(msq2,"#i2"); 
  else{ next(msq2,msq1,msq3,msq4,msq5,msq6,'2',"L'Algérino_Adios_Soolking","#i2","section #div2");i=2}});

  $("#i3").click(
    function(){if (i==3)  play(msq3,"#i3");
  else{ next(msq3,msq1,msq2,msq4,msq5,msq6,'3',"GLK_Sinaloa_Soolking_Koba","#i3","section #div3");i=3}})

  $("#i4").click(
    function(){if (i==4)  play(msq4,"#i4");
  else{next(msq4,msq1,msq2,msq3,msq5,msq6,'4',"Sifax_peine_Soolking","#i4","section #div4");i=4}})

  $("#i5").click(
    function(){if (i==5)  play(msq5,"#i5");
  else{next(msq5,msq1,msq2,msq4,msq3,msq6,'5',"Soolking_Milano_prod_Slembeatz","#i5","section #div5");i=5}})

  $("#i6").click(
     function(){if (i==6)  play(msq6,"#i6");   
  else{next(msq6,msq1,msq2,msq3,msq5,msq5,'6',"Soolking_Ouled_Bahdja_Liberté","#i6","section #div6");i=6}})


});
