cd StacklottoAppVue/
yarn build
cd ../
rm -r StacklottoApp/static/StacklottoApp/*
cp -r StacklottoAppVue/dist/* StacklottoApp/static/StacklottoApp/
cp StacklottoAppVue/dist/index.html StacklottoApp/templates/StacklottoApp/index.html
rm -r StacklottoAppVue/dist