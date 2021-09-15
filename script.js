const root = new Vue({
    el: '#root',
    data: {
        images: [
           {
                source: 'https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706_960_720.jpg',
                alt: 'Tree forest landscape'
            },
            {
                source: 'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753_960_720.jpg',
                alt: 'Aurora borealis landscape'
            },
            {
                source: 'https://cdn.pixabay.com/photo/2018/04/28/22/03/tree-3358468_960_720.jpg',
                alt: 'Tree dawn landscape'
            },
            {
                source: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg',
                alt: 'Arctic fox picture'
            },
            {
                source: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg',
                alt: 'Polynesia landscape'
            },
            {
                source: 'https://cdn.pixabay.com/photo/2021/04/26/20/53/beachy-head-6209982_960_720.jpg',
                alt: 'Cliffs landscape'
            },
        ],
        currentImageIndex: 0,
    },
    methods: {
        previousImage: function() {
            this.currentImageIndex--;

            if (this.currentImageIndex < 0) {
                this.currentImageIndex = (this.images.length - 1);
            }
        },
        nextImage: function() {
            this.currentImageIndex++;

            if (this.currentImageIndex > this.images.length - 1) {
                this.currentImageIndex = 0;
            }
        },
        goToImage: function(index) {
            this.currentImageIndex = index;
        },
    },
    mounted() {
        setInterval(this.nextImage, 5000);
    }
})