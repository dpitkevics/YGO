$(document).ready (function (e) {
        $.ajax({
                type    :       'POST',
                url     :       'php-scripts/process-auth.php',
                dataType:       'json',
                data    :       {
                        'function':'checkAuth'
                },
                success :       function (data) {
                        if (data == false) {
                                var maskHeight = $(document).height();
                                var maskWidth = $(window).width();
                                $("#mask").css({'width':maskWidth,'height':maskHeight});

                                $("#mask").fadeIn(1000);
                                //$("#mask").fadeTo("slow",0.8);

                                var winH = $(window).height();
                                var winW = $(window).width();

                                var id = "#auth";

                                $(id).css('top', (winH-200)/2-$(id).height()/2);
                                $(id).css('left', winW/2-$(id).width()/2);

                                $(id).fadeIn(2000); 

                                $("#login-submit").click(function () {
                                        var username = $("#username").val();
                                        var password = $("#password").val();

                                        $.ajax({
                                                type    :       'POST',
                                                url     :       'php-scripts/process-auth.php',
                                                dataType:       'json',
                                                data    :       {
                                                        'function':'login',
                                                        'username':username,
                                                        'password':password
                                                },
                                                success :       function (data) {
                                                        if (data != false) {
                                                                $("#player-id").text(data['id']);
                                                                $("#player-greet").html("Greetings, " + data['fname'] + "! <span id='logout'>Logout</span>");
                                                                $("#authentication").text(1);
                                                                $(id).fadeOut(1000);
                                                                $("#mask").fadeOut(2000);
                                                        } else {
                                                                alert ("Username or password is incorrect");
                                                        }
                                                },
                                                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                                                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                                                }
                                        });
                                });
                        } else {
                                $.ajax({
                                        type    :       'POST',
                                        url     :       'php-scripts/process-auth.php',
                                        dataType:       'json',
                                        data    :       {
                                                'function':'getSession'
                                        },
                                        success :       function (data) {
                                                $("#player-id").text(data['id']);
                                                $("#player-greet").html("Greetings, " + data['fname'] + "! <span id='logout'>Logout</span>");
                                                $("#authentication").text(1);
                                        },
                                        error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                                                $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                                        }
                                });
                        }
                },
                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                }
        });
        //e.preventDefault();
        $("#logout").live("click", function () {
                $.ajax({
                        type    :       'POST',
                        url     :       'php-scripts/process-auth.php',
                        dataType:       'json',
                        data    :       {
                                'function':'logout'
                        },
                        success :       function (data) {
                                window.location = 'index.php';
                        },
                        error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                                $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                        }
                });
        });
});
