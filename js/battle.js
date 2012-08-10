$(document).ready (function () {
        var auth = null;
        $.ajax({
                type    :       'POST',
                url     :       'php-scripts/process-auth.php',
                dataType:       'json',
                data    :       {
                        'function':'checkAuth'
                },
                success :       function (data) {
                        auth = data;
                },
                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                }
        });
        if (auth != false) {
                var maskHeight = $(document).height();
                var maskWidth = $(window).width();
                $("#game-mask").css({'width':maskWidth,'height':maskHeight});

                $("#game-mask").fadeIn(1000);
                $("#game-mask").fadeTo("slow",0.6);

                var winH = $(window).height();
                var winW = $(window).width();

                var id = "#new-game";

                $(id).css('top', (winH-200)/2-$(id).height()/2);
                $(id).css('left', winW/2-$(id).width()/2);

                $(id).fadeIn(2000);
                
                setInterval(function () {
                        $.ajax({
                                type    :       'POST',
                                url     :       'php-scripts/process-battle.php',
                                dataType:       'json',
                                data    :       {
                                        'function':'getGameList'
                                },
                                success :       function (data) {
                                        var result = '';
                                        $.each(data, function (key, value) {
                                                result += '<span class="game" game-id="'+ value['id'] +'">Game ID:'+ value['id'] +'</span><br />';
                                        });
                                        $("#available-games").html("");
                                        $("#available-games").append(result);
                                },
                                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                                        $("body").append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                                }
                        });
                }, 1000);
                
                $('.game').live('click', function () {
                        var gameid = $(this).attr('game-id');
                        startGame(gameid);
                });
                
                setInterval(function () {
                        $.ajax({
                                type    :       'POST',
                                url     :       'php-scripts/process-battle.php',
                                dataType:       'json',
                                data    :       {
                                        'function':'checkDiff',
                                        'gameid':$("#game-id").text()
                                },
                                success :       function (data) {
                                        $.each (data, function (key, value) {
                                                if (value != 0) {
                                                        $("#"+key).text(value);
                                                }
                                        });
                                },
                                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                                }
                        });

                        $.ajax({
                                type    :       'POST',
                                url     :       'php-scripts/process-battle.php',
                                dataType:       'json',
                                data    :       {
                                        'function':'checkCONDiff',
                                        'gameid':$("#game-id").text()
                                },
                                success :       function (data) {
                                        var player = '';
                                        var enemy = '';
                                        $.each (data, function (key, value) {
                                                if (value['player'] == 1) {
                                                        player += '<span card-id="'+value['cardid']+'" class="card">'+value['cardid']+'</span>';
                                                } else if (value['player'] == 2) {
                                                        enemy += '<span card-id="'+value['cardid']+'" class="card">'+value['cardid']+'</span>';
                                                }
                                        });
                                        $("#part-player").html(player);
                                        $("#part-opponent").html(enemy);
                                },
                                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                                }
                        });
                }, 1000);
        }
        $('.card').live('click', function () {
                var id = $(this).attr('card-id');
                var position = $('#field-player .monster-card:empty:eq(0)').attr('id');
                placeCard(id, position);
        });
        /*$('.card').click (function () {
                alert("id");
                var id = $(this).attr('card-id');
                
                var position = $('.monster-card:empty:eq(0)').attr('id');
                placeCard(id, position);
        });*/
});

function placeCard(cardid, position) {
        $.ajax({
                type    :       'POST',
                url     :       'php-scripts/process-battle.php',
                dataType:       'json',
                data    :       {
                        'function':'placeCard',
                        'cardid':cardid,
                        'position':position,
                        'gameid':$("#game-id").text()
                },
                success :       function (data) {
                        //alert (data);
                },
                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                }
        });
        $.ajax({
                type    :       'POST',
                url     :       'php-scripts/process-battle.php',
                dataType:       'json',
                data    :       {
                        'function':'removeFromHand',
                        'cardid':cardid,
                        'gameid':$("#game-id").text()
                },
                success :       function (data) {
                        //alert(data);
                },
                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                }
        });
}

function checkFieldDiff() {
        $.ajax({
                type    :       'POST',
                url     :       'php-scripts/process-battle.php',
                dataType:       'json',
                data    :       {
                        'function':'checkDiff',
                        'gameid':$("#game-id").text()
                },
                success :       function (data) {
                        alert (data);
                },
                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                        $(body).append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                }
        });
}

function startGame(gameid) {
        $.ajax({
                type    :       'POST',
                url     :       'php-scripts/process-battle.php',
                dataType:       'json',
                data    :       {
                        'function':'startGame',
                        'gameid':gameid
                },
                success :       function (data) {
                        $("#new-game").fadeOut(1000);
                        $("#game-mask").fadeOut(2000);
                        $("#game-id").text(data['id']);
                        $("#player").text(2);
                        $("#player_id").text(data['player_2']);
                },
                error   :       function (XMLHttpRequest, textStatus, errorThrown) {
                        $('body').append('<div style="width:100%; height:100px; background:red;">XMLHttpRequest error text: '+ XMLHttpRequest +'. TextStatus error text: '+ textStatus +'. ErrorThrown error text: '+ errorThrown +'</div>');
                }
        });
}