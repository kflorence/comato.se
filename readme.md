# comato.se

My staticly generated dynamic site, powered by [jekyll](http://jekyllrb.com/),
[disqus](http://disqus.com/), [vim](http://vim.org/) and [git](http://git-scm.com/)!

## Gemset issues

Requires rubygems >= 1.3.7 -- this fixes problems on ubuntu:

    sudo apt-get remove rubygems
    wget http://rubyforge.org/frs/download.php/74954/rubygems-1.8.5.tgz
    tar xzvf rubygems-1.3.5.tgz
    cd rubygems-1.3.5
    sudo ruby setup.rb
    sudo ln -s /usr/bin/gem1.8 /usr/bin/gem
    sudo gem update --system

## License

Anything in the \_posts directory is copyright 2011 Kyle Florence  
Everything else is released under a dual MIT and BSD license.
