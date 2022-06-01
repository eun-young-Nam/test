<template>
  <v-app>
    <v-container class="pt-10">
      <!-- 검색바 -->
      <search-bar/>
      <!-- 영화바 -->
      <movie-list/>
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import MovieList from '@/components/MovieList'

export default {
  name: 'App',
  components: { 
    SearchBar,
    MovieList 
  }
}
</script>
