<?php

declare(strict_types=1);

namespace App;

use function Php\get;

/**
 * Class I18n
 *
 * @package App
 */
class I18n
{
    /**
     * @var string
     */
    protected string $locale = '';

    /**
     * @var array
     */
    protected array $messages = [];

    /**
     * @var I18n
     */
    private static I18n $instance;

    /**
     * I18n constructor.
     */
    protected function __construct()
    {
    }

    /**
     * @return I18n
     */
    public static function getInstance(): I18n
    {
        if (!isset(self::$instance)) {
            self::$instance = new static();
        }
        return self::$instance;
    }

    /**
     * @param string $locale
     *
     * @return $this
     */
    public static function locale(string $locale): self
    {
        $instance = static::getInstance();
        $instance->locale = $locale;
        return $instance;
    }

    /**
     * @param string $locale
     * @param array $messages
     *
     * @return $this
     */
    public static function load(string $locale, array $messages): self
    {
        $instance = static::getInstance();
        $instance->messages[$locale] = $messages;
        return $instance;
    }

    /**
     * @param string $path
     *
     * @return string
     */
    public static function translate(string $path): string
    {
        $instance = static::getInstance();
        $messages = $instance->messages[$instance->locale];
        return get($messages, $path) ?? $path;
    }
}