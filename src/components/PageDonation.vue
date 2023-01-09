<template>

    <div class="page-inside donation">

    <div class="w-text">
        <div class="texthighlight_yellow t-align-center">
          <h1>{{ title }}</h1>
        </div>
      </div>

      <div class="w-text section_half">
        <p class="hyphens" v-html="text"/>

        <!-- <p class="hyphens">
          Мы российская автономная некоммерческая организация, занимаемся исследованиями 
          в области Умных городов и Индустрии 4.0. При работе над проектами мы используем большое количество времени 
          высококвалифицированных инженеров, деньги на сопутствующее оборудование, интернет и кофе. Познакомьтесь с 
          нашей деятельностью, почитав <a href=' + this.$static.metadata.blogRU + ' target=_blank>блог</a> или <a href='/ru/services'>информацию о разработках</a></p> -->

        <h2>{{ description }}</h2>

        <div class="grid-2">
          <div class="qrcode section-bordered t-align-center">
            <p><b>{{ qrcodeTitle }}</b></p>
            <g-image src="~/assets/images/QR-donate.png" />
          </div>
      
          <div class="section-bordered t-align-center">
              <p><b>{{ donateTitle }}</b></p>

              <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
                <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="1538042640922">
                <input class="tinkoffPayRow" type="hidden" name="frame" value="true">

                <input class="tinkoffPayRow" type="hidden" name="language" :value="lang">

                <input class="tinkoffPayRow" type="hidden" name="frame" value="false">
              
                <div class="inp-paysum" id="donation-sum">
                  <input id="sum" type="text" value="" placeholder="0.00" required name="amount" class="tinkoffPayRow w-full">
                </div>

                <div class="btn-iconed btn-iconed--pay">
                    <input class="btn btn-yellow w-full tinkoffPayRow" id="sum-submit" type="submit" :value="button">
                </div>
                <g-image class="i-payment-methods" alt="Visa, MasterCard, Maestro, МИР" src="~/assets/images/payment-methods.png"/>
              </form>

            </div>
          </div>
      </div>

  </div>

</template>


<style scoped>
  .donation__banner {
    display: block;
    width: 900px;
    max-width: 100%;
    margin: calc(var(--space)*2) auto;
  }

  .donation .sec-bordered{
    margin-top: calc(var(--space)*2);
  }

  .donation form {
      max-width: 300px;
      margin: 0 auto;
  }
  
  .donation .inp-paysum {
    position: relative;
  }

  .donation .inp-paysum input {
    position: relative;
    z-index: 0;
    text-align: center;
  }

  .donation .inp-paysum:after {
    content:'₽';
    position: absolute;
    z-index: 1;
    right: 22px;
    top: 13px;
    font-weight: 500;
  }

  .i-payment-methods{
    display: inline-block;
    max-width: 100%;
    margin-top: var(--space);
  }
</style>


<script>
export default {

  props: {
      title: { type: String, default: '' },
      text: { type: String, default: '' },
      qrcodeTitle: { type: String, default: '' },
      donateTitle: { type: String, default: '' },
      description: { type: String, default: '' },
      lang: { type: String, default: '' },
      button: { type: String, default: '' }
  },


  mounted: function(){
    let payScript = document.createElement('script')
    payScript.setAttribute('src', 'https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js')
    document.head.appendChild(payScript)


    document.getElementById("sum-submit").disabled = true;
      
      function number_format( number ) {
        return parseFloat(number.replace(",", "."));
      }
      
      function set_error(o){
        // o.classList.add("error");
        document.getElementById("sum-submit").disabled = true;
        o.focus();
      }
      
      function remove_error(o){
        // o.classList.remove("error");
        document.getElementById("sum-submit").disabled = false;
        o.focus();
      }
      
      function check_error(o){
        if( (parseFloat(o.value) < 99) || (/[a-zа-яё]/i.test(o.value))  || o.value=='' )
          return true;
      }
      
      sum.oninput = function() {
        
        if(!check_error(this)) {
          remove_error(this);
        }
        else{
          set_error(this);
        }
      };
      
      
      sum.onblur = function() {
        if(!check_error(this)) {
          var result = number_format(this.value);
          this.value = result;
        }
      };
  }
}
</script>

<style scoped>
  /* .qrcode {
    // margin-bottom: 40px;

    img {
      display: inline-block;
      max-width: 100%;
      width: 200px;
    }
  }

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    @media screen and (max-width:570px) {
      grid-template-columns: 1fr;
    }
  } */
</style>

