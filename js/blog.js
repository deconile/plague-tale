

$(document).ready(function(){
    placePost();
});

function placePost(){
    let limit = posts.length;
    if($('.blog').is('#blog-carousel') && limit > 7){
        limit = 7;
    }

    for(i = 0; i < limit; i++ ){
        const postTemplate = `
        <div class="blog-post">
            <div class="header">
                <img src="images/blog-${i+1}.jpg" />
                <div class="label">${posts[i].label}</div>
            </div>
            <div class="body">
                <div class="divider">
                    <div><div></div></div>
                    <div class="icon"><i class="fa-solid fa-circle-dot"></i></div>
                    <div><div></div></div>
                </div>
                <div class="article">
                    <p>${posts[i].teaser}</p>
                </div>
            </div>
            <div class="button-container">
                <div class="button flip secondary small">
                    <div class="box">
                        <div>${posts[i].cta}</div>
                        <div>Read post</div>
                    </div>
                </div>
            </div>
        </div>
        `
        $('.blog').find('.posts').append(postTemplate);
    }
    $('#blog-carousel').find('.posts').children().first().addClass('active');
    $('#blog-carousel').find('.posts').children().eq(1).addClass('jux');
}

const posts = [
    {
        label : 'Amicia\'s Journey',
        teaser : 'Amicia lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'Find out what happens next'
    },
    {
        label : 'Hugo and the Macula',
        teaser : 'Hugo lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'Learn more about the origins of the Macula'
    },
    {
        label : 'Best of Player Photos',
        teaser : 'Players lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'See the best moments captured'
    },
    {
        label : 'Nominations at The Game Awards 2022',
        teaser : 'A Plague Tale: Requiem lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'See Requiem\'s award nomimations'
    },
    {
        label : 'Requiem\'s Connection to Historical Events',
        teaser : 'A Plague Tale: Requiem lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'View Our Research and Fun Historical Facts'
    },
    {
        label : 'Game Play Videos from the Community',
        teaser : 'Community videos lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'View game play videos from players'
    },
    {
        label : 'Recap from Innocence',
        teaser : 'A Plague Tale: Innocence lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        cta : 'See what has happened so far'
    },
];
