(function() {
  var setHeight;

  $(function() {
    var jPM, jRes;
    if (Modernizr.touch) {
      FastClick.attach(document.body);
    }
    jPM = $.jPanelMenu({
      menu: '#main-nav',
      trigger: '.open-menu',
      duration: 300
    });
    jRes = jRespond([
      {
        label: 'small',
        enter: 0,
        exit: 640
      }, {
        label: 'large',
        enter: 640,
        exit: 10000
      }
    ]);
    jRes.addFunc({
      breakpoint: 'small',
      enter: function() {
        jPM.on();
        $('#jPanelMenu-menu').removeClass('horizontal').addClass('side');
        return $('.main-nav.horizontal').hide();
      },
      exit: function() {
        jPM.off();
        return $('.main-nav.horizontal').show();
      }
    });
  });

  setHeight = function() {
    var dh;
    dh = $(document).height();
    return $('section.main-wrapper').height(dh);
  };

}).call(this);
