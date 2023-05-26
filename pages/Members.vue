<template>
  <div>
    <AddButton @click="showAddForm"></AddButton>
    <v-card v-if="formShown">
      <v-card-title>Add new member</v-card-title>
      <v-card-text>
        <AddMember @created="memberCreated" @cancel="hideForm"></AddMember>
      </v-card-text>
    </v-card>
    <MemberStyle
      v-for="member in members"
      :key="member.id"
      v-model="member.data"
    ></MemberStyle>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import AddButton from '~/components/buttons/AddButton.vue'
import AddMember from '~/components/AddMember.vue'
import MemberStyle from '~/components/MemberStyle.vue'
export default {
  name: 'Members',
  components: { AddButton, AddMember, MemberStyle },
  data() {
    return {
      formShown: false,
      members: [
        {
          id: 1,
          data: {
            id: 1,
            imgSrc: './img/vitaly.jpg',
            name: 'Vitaly Savin',
            title: 'Web Developer',
            quote:
              'Recently graduated in Web Development and with a solid theoretical base, I am able to learn quickly from Senior Developers and by myself. Strive to solve more complex problems in the most efficient way possible, both as a team and individually.',
            strengths:
              'I work efficiently in a team and have great autonomy in my learning. Creative and with a good ability to synthetize, I can accurately and quickly accomplish tasks to enhance your business operations',
            likes: 'I enjoy running, skiing and learning new things.',
            linkedin: 'https://www.linkedin.com/in/vitaly-savin-710097252/',
            profile: 'https://laresolution.ca/internshipleague/vitaly-savin/',
          },
        },
        {
          id: 2,
          data: {
            id: 2,
            imgSrc: './img/zohreh.jpeg',
            name: 'Zohreh NAJAFi',
            title: 'Web Developer',
            quote:
              'I am a web developer (full stack) and currently spending my internship on WordPress and Divi builder with Laresolution, Montreal. However, I am interested to any other technogy and framework that attract my attention to itself as well. If you lack a web developer in your team, you can count on me.',
            strengths:
              'Good Technical skills, Love of learning,  Adaptable, Positive attitude, and Good skills in Communication are part of my personality.',
            likes:
              'I am a big fan of Reading, Working Out, Nature, Traveling, and News.',
            linkedin: 'https://www.linkedin.com/in/zor%C3%A9-najafi-a92b84140/',
            profile: 'https://laresolution.ca/internshipleague/zohreh/',
          },
        },
        {
          id: 3,
          data: {
            id: 3,
            imgSrc: './img/philip.jpeg',
            name: 'Philip Hou',
            title: 'Web Developer',
            quote:
              'With a strong interest in the front-end web developer position and a solid background in Web development,  I have learned skills in using modern front-end frameworks such as React, Angular, and Vue.js, and have experience working with content management systems (CMS) such as WordPress and Joomla.',
            strengths:
              'Front-end Frame work Vue.js, React ,Angular and Node.js adn Bootstrap. Content management systems WordPress, joomla.',
            likes: 'Music, pets, netflix series.',
            linkedin: 'https://www.linkedin.com/in/philip-h-486992255/',
            profile:
              'https://laresolution.ca/internshipleague/philips-profile/',
          },
        },
        {
          id: 4,
          data: {
            id: 4,
            imgSrc: './img/tiana.jpeg',
            name: 'Tiana Rabezandriny',
            title: 'Web Developer',
            quote:
              'Recent graduate ready for new challenges in Web development.',
            strengths:
              'The ability to work in a team, Good analytical skills, Autonomous, Adaptability, Good learning ability, Creative',
            likes: 'Full Stack Development',
            linkedin:
              'https://www.linkedin.com/in/tiana-rabezandriny-b98321254',
            profile: 'https://laresolution.ca/internshipleague/tianas-profile/',
          },
        },
        {
          id: 5,
          data: {
            id: 5,
            imgSrc: './img/grimauro.jpeg',
            name: 'Grimauro Fraga Filho',
            title: 'Web Developer',
            quote:
              'As Web developer I’ve worked in many projects that consolidated my knowledge in Front-end (HTML/CSS/JS), React, Vue.js. In Back-end I’ve learned the following technologies: C#, Java, PHP, Node.js. Also, I’ve learned to build Websites using CMS (WordPress) and many types of DBMS (MySQL, Oracle, SQL Server).',
            strengths:
              'Team Spirit, Hardworking, Attention to details, Problem-Solving',
            likes: 'Music, Arts, Cinema.',
            linkedin:
              'https://www.linkedin.com/in/grimauro-fraga-filho-63890866/',
            profile:
              'https://laresolution.ca/internshipleague/grimauros-profile/',
          },
        },
      ],
    }
  },
  methods: {
    showAddForm() {
      this.formShown = true
    },
    memberCreated(newMember) {
      const newId = uuidv4()
      newMember.id = newId
      this.members.push({
        id: newId,
        data: newMember,
      })
      this.hideForm()
    },
    hideForm() {
      this.formShown = false
    },
  },
}
</script>
