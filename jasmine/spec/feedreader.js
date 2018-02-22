
/* Testing the RSS feeds */

$(function() {

    describe('RSS Feeds', function() {

        /* Makes sure feeds are defined */


        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Makes sure feeds have url data */


        it('URLs are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }

        });


        /* Makes sure feeds have name data */


        it('names are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }

         });



    });


/* Testing the hamburger menu */


$(function() {

    describe('The menu', function() {

        /* Makes sure the menu popup is hidden by default */


        it('menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        /* Makes sure the menu pops up when the hamburger is clicked */


        it('menu toggles on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

});



/* Testing to make sure at least one entry from the feed loads */


$(function() {

    describe('Initial Entries', function() {


        /* Makes sure at least one entry is present in the feed container */


         beforeEach(function(done) {
            loadFeed(0, done);
         });

        it('should have at least one entry', function() {
          expect($('.feed .entry').length).not.toBe(0);
        });



    });

});


/* Testing to make sure content on the page changes if a new feed is loaded */



$(function() {

    describe('New Feed Selection', function() {


        /* Checks html data before and after a new feed is loaded to make sure the content is different */


        let preLoad = "";
        let postLoad = "";

        beforeEach(function(done) {
            preLoad = $(".feed").html();
            loadFeed(1,function() {
                postLoad = $(".feed").html();
                loadFeed(0, done);
            });

         });


        it('content changes when new feed loads', function() {
            expect(preLoad === postLoad).toBe(false);
        });


    });

});

}());
