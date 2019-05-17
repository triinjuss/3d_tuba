import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'

new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
            <a-asset-item id="chandelier" src="./assets/models/luhter.obj"></a-asset-item>
            
          </a-assets>
        </template>
      <Ceiling position="0 3 0" />
      <a-entity class="chandelier" position="0 2.5 0" scale="0.001 0.001 0.001" obj-model="obj: #chandelier"></a-entity>
      <Wall position="0 0 -5"/>
      <Wall position="-5 0 0" rotation="0 90 0"/>
      <Wall position="5 0 0" rotation="0 -90 0"/>
      <Wall position="0 0 5" rotation="0 -180 0"/>
      <Floor />
       
      </Scene>
    </Layout>
    `,
})