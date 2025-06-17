<template>
  <div class="ctr">
    <transition name="fade" mode="out-in">
    <!--question-->
    <Questions v-if="questionsAnswered < questions.length" :questions="questions" :questionsAnswered="questionsAnswered" @questions-answer="questionAnswered" />
    <!--result -->

    <Result v-else :results="results" :totalCorrect="totalCorrect"/>
    </transition>
    <button type="button" class="reset-btn" @click.prevent="reset" v-if="this.questionsAnswered===questions.length">Reset</button>

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
  methods:{
    questionAnswered(is_correct){
      if(is_correct){
        this.totalCorrect++;
      }
      this.questionsAnswered++;
    },
    reset(){
      this.questionsAnswered=0;
      this.totalCorrect=0;
    }
  },
  data(){
    return {
      questionsAnswered:0,
      totalCorrect:0,
      questions,
      results
    }
  }
}
</script>