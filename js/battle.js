$(document).ready (function () {
        var auth = $("#authentication").text();
        if (auth != 0) {
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