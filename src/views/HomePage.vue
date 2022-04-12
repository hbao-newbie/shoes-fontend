<template>
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light bg-img-all bg-img-1">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-4 font-weight-normal color-white">SHOES STORE</h1>
            <p class="lead font-weight-normal color-white">Nâng niêu từng bước chân của bạn.</p>
            <router-Link class="btn btn-outline-secondary color-white" :to="{ name: 'Product'}">Go to buy</router-Link>
        </div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden full-1">
            <div class="my-3 py-3">
            <h2 class="display-5">BASAS BUMPER GUM EXT</h2>
            <p class="lead">Bumper Gum EXT (Extension) NE là bản nâng cấp được xếp vào dòng sản phẩm Basas, nhưng lại gây ấn tượng với diện mạo phá đi sự an toàn thường thấy.</p>
            </div>
            <router-link class="mx-auto" :to="{ name: 'Product'}">
                <div class="bg-light shadow-sm mx-auto bg-img-all bg-img-21" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                </div>
            </router-link>
        </div>
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden full-1">
            <div class="my-3 p-3">
            <h2 class="display-5">VINTAS AUNTER - LOW TOP</h2>
            <p class="lead">Kết hợp cùng diện mạo quai dán (hook'n loop) mới mẻ, Aunter chính là một bản phối lạ lẫm nhưng đầy thú vị lần đầu tiên xuất hiện của dòng Vintas.</p>
            </div>
            <router-link class="mx-auto" :to="{ name: 'Product'}">
                <div class="bg-dark shadow-sm mx-auto bg-img-all bg-img-31" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                </div>
            </router-link>
        </div>
    </div>

    <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden full-1">
            <div class="my-3 py-3">
            <h2 class="display-5">VINTAS AUNTER - LOW TOP</h2>
            <p class="lead">Kết hợp cùng diện mạo quai dán (hook'n loop) mới mẻ, Aunter chính là một bản phối lạ lẫm nhưng đầy thú vị lần đầu tiên xuất hiện của dòng Vintas.</p>
            </div>
            <router-link class="mx-auto" :to="{ name: 'Product'}">
                <div class="bg-light shadow-sm mx-auto bg-img-all bg-img-41" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                </div>
            </router-link>
        </div>
        <div class="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden full-1">
            <div class="my-3 p-3">
            <h2 class="display-5">URBAS RULER - LOW TOP</h2>
            <p class="lead">Sử dụng chất da bò Nappa có bề mặt nhẵn bóng, kết hợp cùng mesh và Suede (da lộn) thường xuất hiện ở các đôi Sneaker cao cấp.</p>
            </div>
            <router-link class="mx-auto" :to="{ name: 'Product'}">
                <div class="bg-dark shadow-sm mx-auto bg-img-all bg-img-51" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.bg-img-all {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 100%;
}

.bg-img-1{
    background-image: url('./homepage/img1.jpg');
}
.color-white {
    color: #f8f9fa;
}

.full-1 {
    width: 100%;
}

.bg-img-21{
    background-image: url('./homepage/img21.jpg');
}

.bg-img-21:hover {
    background-image: url('./homepage/img22.jpg');
}

.bg-img-31{
    background-image: url('./homepage/img31.jpeg');
}

.bg-img-31:hover {
    background-image: url('./homepage/img32.jpeg');
}

.bg-img-41{
    background-image: url('./homepage/img41.jpeg');
}

.bg-img-41:hover {
    background-image: url('./homepage/img42.jpeg');
}

.bg-img-51{
    background-image: url('./homepage/img51.jpg');
}

.bg-img-51:hover {
    background-image: url('./homepage/img52.jpg');
}

</style>