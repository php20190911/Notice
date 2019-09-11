$(function () {
    $(".form_datetime").datetimepicker({
        format: "yyyy-mm-dd hh:ii:ss",
        autoclose: !0,
        todayBtn: !0,
        pickerPosition: "bottom-left",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    }), $(".form_datetime-component").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: !0,
        todayBtn: !0,
        pickerPosition: "bottom-left",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    }), $(".form_datetime-adv").datetimepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: !0,
        todayBtn: !0,
        startDate: "2013-02-14 10:00",
        minuteStep: 10,
        pickerPosition: "bottom-left",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    }), $(".form_datetime-meridian").datetimepicker({
        format: "dd MM yyyy - HH:ii P",
        showMeridian: !0,
        autoclose: !0,
        todayBtn: !0,
        pickerPosition: "bottom-left",
        templates: {
            leftArrow: '<i class="fa fa-angle-left"></i>',
            rightArrow: '<i class="fa fa-angle-right"></i>'
        }
    })
});