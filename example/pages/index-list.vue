<template>
  <div class="page-indexlist">
    <p class="page-indexlist-desc">此例请使用手机查看</p>
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section v-for="(item,index) in alphabet" :index="item.initial" :key="index">
          <mt-cell-group grouppaddingleft="16px">
            <mt-cell v-for="(cell,index) in item.cells" :key="index" :title="cell" cellheight='44px'></mt-cell>
          </mt-cell-group>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component indexlist {
      margin-top: 45px;

      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
      }

      @descendent wrapper {
        width: 100%;
        border-top: solid 1px #ddd;
      }
    }
  }
</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      };
    },

    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
