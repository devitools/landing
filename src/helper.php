<?php

use App\I18n;

/**
 * @param string $path
 */
function t(string $path)
{
    echo I18n::translate($path);
}