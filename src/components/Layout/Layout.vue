<template>
  <div>
    <img
      src="https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABbtnw6C35mhluezr-K_FiP65TW93xpH0M3S6lKPv50_7eshzc1vosWxE3CxcnJ5-eVYmpcaQyra9yFLzQtsNx4odwYO-GtDDmDU0.png?r=47e"
      class="logo"
    />
    <select name="currentStatus" @change="changeStatus" class="status">
      <option value="">All</option>
      <option value="Alive">Alive</option>
      <option value="unknown">Unknown</option>
      <option value="Dead">Dead</option>
    </select>
    <fetch-users :currentPage="currentPage" :currentStatus="currentStatus">
    </fetch-users>
    <div class="pagination">
      <button class="prev" id="prev" @click="prevPage">Prev</button>
      <span class="currentPage">{{ currentPage }}</span>
      <button class="next" id="next" @click="nextPage">Next</button>
    </div>
  </div>
</template>
