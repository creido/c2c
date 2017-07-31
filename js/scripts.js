const ZIP_CODE = '71923';
const key = 'AIzaSyAvdOyCtU22baeA6Yc3kFVxqehIYrIBc4w';
// const key = 'AIzaSyCQmU30AQBeUepZcXktk3W4qawZdIMOtm8';
const url = `https://content.googleapis.com/civicinfo/v2/representatives?address=${ZIP_CODE}&includeOffices=true&levels=locality&roles=legislatorLowerBody&alt=json&key=${key}`;

const success = (data) => {
    console.log('success', data);
    // $('body').html(data);
};

const init = () => {
    console.log('init');

    $.getJSON(url, success);
};


$(function () {
    init();
});
