
$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('URLs are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }

        });


        it('names are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }

         });



    });



$(function() {

    describe('The menu', function() {

        it('menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('menu toggles on click', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });

});


$(function() {

    describe('Initial Entries', function() {


         beforeEach(function(done) {
            loadFeed(0, done);
         });

        it('should have at least one entry', function() {
          expect($('.feed .entry').length).not.toBe(0);
        });



    });

});



$(function() {

    describe('New Feed Selection', function() {


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
