<?php

use App\I18n;

require __DIR__ . '/helper.php';

I18n::locale('pt-br');
I18n::load('pt-br', require __DIR__ . '/../lang/pt-br.php');
