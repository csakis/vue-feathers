<template>
    <v-container fluid fill-height>
        <v-layout >
            <v-flex lg12>
              <v-card height="100%" class="elevation-5">
                <v-toolbar dense dark color="primary">
                <v-toolbar-title>Title</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <pdf src="../pdfs/Csaba_Kiss_CV.pdf"></pdf>
                </v-card-text>
              </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  components :{
    pdf
  }
  
};
</script>