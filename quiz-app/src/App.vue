<template>
  <div class="ctr">
    <!--question-->
    <Questions v-if="questionsAnswered < questions.length" :questions="questions"  />
    <!--result -->
    <Result v-else/>
    <button type="button" class="reset-btn">Reset</button>
  </div>
</template>

<script>
import Questions from "@/components/Questions.vue";
import Result from "@/components/Result.vue";
import {questions, results} from "@/data/quizeData.js";

export default {
  name:"App",
  components:{
    Questions,
    Result
  },
  data(){
    return {
      questionsAnswered:0,
      questions,
      results
    }
  }
}
</script>