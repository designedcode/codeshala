$(function(){

    $('.our-students-achievers-card-wrapper.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows:true,
        variableWidth:true,
        centerMode: true,
        centerPadding:0,
        slidesToShow:3,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    })

    $('.user-testimonial-cards-wrapper').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay:true,
        arrows:false,
        variableWidth:false,
        centerMode: false,
        centerPadding:0,
        slidesToShow:3,
        autoHeight:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    })
    
    
    $('.our-vision-img-wrapper.carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      arrows:true,
      variableWidth:true,
      centerMode: true,
      slidesToShow:1,
      responsive:[
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows:false
          }
        }
      ]
  })


  $('.hero-img-wrapper.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows:false,
    variableWidth:true,
    centerMode: true,
    slidesToShow:1,
    autoHeight:true,
})

$('.why-coding-img-wrapper.carousel').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows:false,
  variableWidth:true,
  centerMode: true,
  slidesToShow:1,
  autoHeight:true,
})

  $('.project-cards-wrapper.carousel').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows:true,
    variableWidth:true,
    centerMode: true,
    centerPadding:0,
    slidesToShow:3,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
})

});