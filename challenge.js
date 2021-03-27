function release (arrow, x) {
  releaseAction = setInterval(function () {
    if (x > 1800) {
      hanldeMousemove()
      clearInterval(releaseAction)
    }
    x = x + 10
    arrow.css('left', x)
  }, 12)
}

function moveBalloons () {
  let balloon1 = $('#balloon1')
  let balloon2 = $('#balloon2')
  let balloon3 = $('#balloon3')
  let pos1 = balloon1.position().top
  let pos2 = balloon2.position().top
  let pos3 = balloon3.position().top

  start1 = true
  start2 = true
  start3 = true

  moveBalloon1 = setInterval(function () {
    if (pos1 > 700) {
      start1 = false
    }
    if (pos1 < 100) {
      start1 = true
    }
    if (start1 == true) {
      pos1 = pos1 + 10
      balloon1.css('top', pos1)
    } else {
      pos1 = pos1 - 10
      balloon1.css('top', pos1)
    }
  }, 50)

  moveBalloon2 = setInterval(function () {
    if (pos2 > 700) {
      start2 = false
    }
    if (pos2 < 100) {
      start2 = true
    }
    if (start2 == true) {
      pos2 = pos2 + 8
      balloon2.css('top', pos2)
    } else {
      pos2 = pos2 - 8
      balloon2.css('top', pos2)
    }
  }, 50)
  moveBalloon3 = setInterval(function () {
    if (pos3 > 700) {
      start3 = false
    }
    if (pos3 < 100) {
      start3 = true
    }
    if (start3 == true) {
      pos3 = pos3 + 14
      balloon3.css('top', pos3)
    } else {
      pos3 = pos3 - 14
      balloon3.css('top', pos3)
    }
  }, 50)
}

function hanldeMousemove () {
  arrow = $('#arrow')

  $(document).mousemove(function (event) {
    arrow.removeAttr('style')
    arrow.css('top', event.pageY)
  })
}

function hanldeClick () {
  arrow.click(function () {
    $(document).off('mousemove')
    release(arrow, event.pageX)
  })
}

function initialize () {
  $('#balloon1').css('top', Math.random() * (+700 - +100) + 100)
  $('#balloon2').css('top', Math.random() * (+700 - +100) + 100)
  $('#balloon3').css('top', Math.random() * (+700 - +100) + 100)
}

$(window).on('load', function () {
  initialize()
  moveBalloons()
  hanldeMousemove()
  hanldeClick()
})
