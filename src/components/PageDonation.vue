<template>

    <div class="page-inside donation">

    <div class="w-text">
      <div class="texthighlight_yellow t-align-center">
        <h1>{{ title }}</h1>
      </div>
    </div>

    <section class="section-banner">
      <div class="w-text donation-banner t-align-center" :class="lang === 'en' ? 'donation-banner-en' : ''">
        <p v-html="text"/>
        <p v-html="text2"/>
      </div>
    </section>


    <section class="section section-gray">
      <div class="w-text">
        <h2>{{ description }}</h2>


        <form name="TinkoffPayForm" onsubmit="pay(this); return false;">
          <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="1538042640922">
          <input class="tinkoffPayRow" type="hidden" name="frame" value="true">

          <input class="tinkoffPayRow" type="hidden" name="language" :value="lang">

          <input class="tinkoffPayRow" type="hidden" name="frame" value="false">
        
          <div class="inp-paysum" id="donation-sum">
            <input id="sum" type="text" value="" :placeholder="donateTitle" required name="amount" class="tinkoffPayRow w-full">
          </div>

          <div>
              <input class="btn btn-red w-full tinkoffPayRow" id="sum-submit" type="submit" :value="button">
          </div>
          <g-image class="i-payment-methods" alt="Visa, MasterCard, Maestro, МИР" src="~/assets/images/payment-methods.png"/>
        </form>

        <div class="qrcode t-align-center">
          <g-image src="~/assets/images/qrcode-in-bubble.png" />
          <p><b>{{ qrcodeTitle }}</b></p>
        </div>
      </div>
    </section>

  </div>

</template>


<style scoped>

  .donation.page-inside {
    padding-bottom: 0;
  }

  .donation-banner {
    min-height: 700px;
    padding-bottom: 400px;
    background-image: url('~@/assets/images/support-img.png');
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom center;
  }

  .donation-banner p {
    font-weight: 500;
  }

  .donation .section-gray {
    position: relative;
    margin-top: 0;
    padding-bottom: 10rem;
  }

  .donation .section-gray .w-text {
    padding-bottom: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .donation .section-gray h2 {
    margin-bottom: calc(var(--space)*3);
  }

  .section-banner {
    padding-bottom: 0;
  }

  .donation form {
      max-width: 345px;
      margin: 0 auto;
  }
  
  .donation .inp-paysum {
    position: relative;
  }

  .donation .inp-paysum input {
    position: relative;
    z-index: 0;
    text-align: left;
  }

  .donation .inp-paysum input::placeholder {
    font-weight: 500;
    color: var(--color-dark);
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

  .qrcode {
    position: absolute;
    width: 318px;
    height: 415px;
    bottom: 134px;
    left: calc(100% + 318px - 50vw);
  }


  @media screen and (max-width: 1270px) {
    .qrcode {
      position: static;
    }

    .donation .section-gray .w-text {
      padding-bottom: 20px;
    }

    .donation form {
      margin-bottom: calc(var(--space) * 2);
    }
  }


  @media screen and (max-width: 670px) {
    .donation-banner-en {
      min-height: 467px;
      padding-bottom: 206px;
    }
  }


  @media screen and (max-width: 455px) {
    .donation-banner {
      min-height: 319px;
      padding-bottom: 203px;
    }
  }
</style>


<script>
export default {

  props: {
      title: { type: String, default: '' },
      text: { type: String, default: '' },
      text2: { type: String, default: '' },
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


