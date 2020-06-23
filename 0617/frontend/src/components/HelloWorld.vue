/* eslint-disable vue/no-parsing-error */
/* eslint-disable vue/no-parsing-error */
<template>
  <div class = "Hello">
    <v-container row wrap id="scroll-target" class="scroll-y">
      <!-- 본문(6) KG(4) node(2) -->
      <v-row class="pl-5">
        <v-col cols="12" md="5">
          <!-- <h3 class="body-1 pa-3">뉴스 주제</h3>

          <v-bottom-navigation
            :value="activeBtn"
            color="blue"
            grow
            flat
            height="30px"
            width="400px"
          >
            <v-btn class="caption">주제1</v-btn>
            <v-btn class="caption">주제2</v-btn>
            <v-btn class="caption">주제3</v-btn>
            <v-btn class="caption">주제4</v-btn>

          </v-bottom-navigation> -->

          <!-- <h3 class="body-1 pa-3">기사 모음</h3> -->
          <v-card width="350">
          <v-flex>
            <v-tabs vertical background-color="#c2dbde">
              <v-tab>
                <div class="caption black--text" v-html="theme_1"></div>
              </v-tab>
              <v-tab>
                <div class="caption" v-html="theme_2"></div>
              </v-tab>
              <v-tab>
                <div class="caption" v-html="theme_3"></div>
              </v-tab>
              <v-tabs-slider color="#83aeb2"></v-tabs-slider>
              <v-tab-item>
                <v-tabs
                  v-model="tab"
                  background-color="#c2dbde"
                  dark
                  height="30px"
                  
                >
                  <v-tabs-slider color="#83aeb2"></v-tabs-slider>
                  <v-tab class="caption black--text"
                    v-for="item in items_title"
                    :key="item.tab"
                  >
                    {{ item.tab }}
                  </v-tab>
                </v-tabs>
                <v-container
                  id="scroll-target"
                  style="max-height: 400px"
                  class="overflow-y-auto"
                >
                  <v-tabs-items v-model="tab"
                    v-scroll:#scroll-target="onScroll"
                    style="height: 600px">
                    <v-tab-item
                      v-for="(item, i) in lineTest"
                        :key="i"
                    >
                      <v-card flat>
                        <v-card-text class="caption #424242" v-html="item.content"></v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-flex>
          </v-card>
          
        </v-col>

        <v-col cols="12" md="4">
          <!-- <h3 class="body-1 pa-3 mt-5">지식 그래프 시각화</h3> -->
          <!-- <v-flex row>
            <v-text-field
              label="Outlined"
              single-line
              outlined
              placeholder="검색을 원하는 단어를 입력해주세요"
            ></v-text-field>
            <v-btn color="primary" dark x-large class="pa-3">Check</v-btn>
          </v-flex> -->
          <!-- <v-combobox class="caption"
            v-model="auto_select"
            :items="auto_items"
            label="키워드 검색"
            multiple
            outlined
            dense
          ></v-combobox> -->
          <v-card class="pa-5" outlined height="435" width="500">
          <!-- <label class="overline"> Node size  </label>
          <input class="overline" type="range" min="1" max="100" v-model='nodeSize' /> {{ options.nodeSize }} -->
          <label class="caption"> Force </label>
          <input class="overline red" type="range" min="100" max="3000" v-model='force'/> {{ options.force }}
          
          <div id="app" class="overline">
            <!-- <svg @click="setZoom" class="container" :width="viewer.w" :height="viewer.h" ref="svg">
              <g :transform="`translate(${zoom.x},${zoom.y})scale(${zoom.k})`">
                <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options"  :link-cb="lcb"/>
              </g>
               <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options"  :link-cb="lcb"/>
            </svg> -->
            
            <d3-network
                :class="content_kg"
                ref='net' 
                :net-nodes="node_0623" 
                :net-links="kg_0623"
                :options="options"  
                :link-cb="lcb"
                @node-click="nodeClick"  
              />
            <!-- :net-nodes="dyn_node"  -->
            <!-- <d3-network ref='net' :net-nodes="sampleNode" :net-links="sampleLink" :options="options"  :link-cb="lcb"/> -->
          </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card height="435" outlined>
            <v-tabs background-color="#c2dbde" centered height="30px">
            <v-tabs-slider color="#83aeb2"></v-tabs-slider>
            <v-tab width="300" class="caption black--text">Fact Check</v-tab>
            <v-tab-item>
              <v-card
                class="mx-auto pa-0 mt-2"
                max-width="250"
                min-width="250"
                outlined
              >
          
                <v-card-title class="overline">
                  [팩트체크]"신종 코로나, 5일 생존하는 공기감염병"…사실은?
                </v-card-title>
            
                <v-card-subtitle class="caption">
                  한편, 최 위원장도 앞서 말한대로 "(바이러스가) 일반 대기에서는 사멸한다"며 공기 감염과는 선을 그었다. 그는 마스크 착용과 관련해서도 "특별한 질병 없이 일상생활을 영위하는 정상 성인이 야외활동을 할 때 모든 상황에서 반드시 마스크를 써야 하는 것은 아니다"라고 설명했다. 
                </v-card-subtitle>
            
              <!-- <v-card-actions>  
                <v-spacer></v-spacer>
                <div>문단보기</div>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
          
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
          
                  <v-card-text>
                    전문가들은 신종 코로나바이러스가 공기감염병이라는 소문은 사실로 보기 어렵다고 말한다. 바이러스가 특정 환경에서 최대 5일 생존할 수 있다는 실험 결과가 '공기 감염' 여부로 이어지지는 않는다는 것이다.
                  </v-card-text>
                </div>
              </v-expand-transition> -->
              </v-card>
            </v-tab-item>
          </v-tabs>     

          </v-card>
        </v-col>
      </v-row>

      <!-- 댓글(6) scatter(6) -->
      <v-row class="pl-5">
        <v-col cols="12" md="5">
          <!-- <h3 class="body-1 pa-3">
            댓글 모음
          </h3> -->

          <v-card max-height="500">
            <v-tabs
            v-model="tab2"
            background-color="#c2dbde"
            dark
            height="30px"
            max-width="400px"
            >
              <v-tabs-slider color="#83aeb2"></v-tabs-slider>
              <v-tab class="caption black--text">좋아요 순</v-tab>
              <v-tab class="caption black--text">댓글 순</v-tab>
              <v-tab class="caption black--text">공감비율 순</v-tab>
              <v-tab class="caption black--text">감정 순</v-tab>

            </v-tabs>

            <v-container
            id="scroll-target"
            style="max-height: 400px"
            class="overflow-y-auto"
            >
            <v-tabs-items v-model="tab2"
              v-scroll:#scroll-target="onScroll"
              style="height: 500px">
              <!-- 좋아요순 -->
              <v-tab-item>
                <v-card flat
                  max-width="1000px"
                  class="mx-auto">
                <v-list dense class="pa-0 ma-0">
                  <v-list-item-group v-model="item" color="primary">
                  <template class="pa-0 ma-0" v-for="(item,index) in like_order_list">
                   
                      <v-list-item
                      :key="item['naver_news_id']"
                      v-on:click="greet(item)"
                      class="pa-0 ma-0"
                      >
                      <v-col class="pa-0 ma-0">
                        <v-row class="pa-0 ma-0">
                          <v-list-item-avatar class="pa-0 ma-0">
                            <v-icon>mdi-emoticon</v-icon>
                          </v-list-item-avatar>
                          <v-col class="pa-0 ma-0">
                          <v-list-item-content class="pt-2 pr-2 ma-0">
                            
                              <v-list-item-title class="pt-2" style="red" v-text="item['user_nick']"></v-list-item-title>
                              
                              <div class="caption" v-html="item['reply']"></div>
                              <!-- <v-list-item-subtitle v-text="item['date_time']"></v-list-item-subtitle> -->
                              <!-- <v-list-item-subtitle v-html="item['reply']"></v-list-item-subtitle> -->
                              <v-row class="pa-0 ma-0">
                                <!-- <div v-text="item['date_time']"></div> -->
                                <div class="pt-2 mr-2 caption">{{$moment(item.date).format('YYYY-MM-DD')}}</div>
                                <v-spacer></v-spacer>
                                <v-btn text icon color="blue lighten-2">
                                  <v-icon small>mdi-thumb-up</v-icon>
                                </v-btn>
                                <div class="pt-2 caption">{{item['like_num']}}</div>
                                
                                <v-btn class="" text icon color="red lighten-2">
                                  <v-icon small>mdi-thumb-down</v-icon>
                                </v-btn>
                                <div class="pt-2 pr-3 caption">{{item['hate_num']}}</div>
                              </v-row>
                            </v-list-item-content>
                          </v-col>
                        </v-row>
                        
                      </v-col>
                      
                      </v-list-item>
                    
                  <v-divider :key="index"></v-divider>
                  </template>
                  </v-list-item-group>
                </v-list>
                </v-card>
              </v-tab-item>
              <!-- 댓글순 -->
              <v-tab-item>
                <v-card flat
                  max-width="1000px"
                  class="mx-auto">
                <v-list dense class="pa-0 ma-0">
                  <template class="pa-0 ma-0" v-for="(item,index) in reply_order_list">
                    <v-list-item
                    :key="item['naver_news_id']"
                    v-on:click="greet(item)"
                    class="pa-0 ma-0"
                    >
                    <v-col class="pa-0 ma-0">
                      <v-row class="pa-0 ma-0">
                        <v-list-item-avatar class="pa-0 ma-0">
                          <v-icon>mdi-emoticon</v-icon>
                        </v-list-item-avatar>
                        <v-col class="pa-0 ma-0">
                        <v-list-item-content class="pt-2 pr-2 ma-0">
                          
                            <v-list-item-title class="pt-2" style="red" v-text="item['user_nick']"></v-list-item-title>
                            
                            <div class="caption" v-html="item['reply']"></div>
                            <!-- <v-list-item-subtitle v-text="item['date_time']"></v-list-item-subtitle> -->
                            <!-- <v-list-item-subtitle v-html="item['reply']"></v-list-item-subtitle> -->
                            <v-row class="pa-0 ma-0">
                              <!-- <div v-text="item['date_time']"></div> -->
                              <div class="pt-2 mr-2 caption">{{$moment(item.date).format('YYYY-MM-DD')}}</div>
                              <v-spacer></v-spacer>
                              <v-btn text icon color="blue lighten-2">
                                <v-icon small>mdi-thumb-up</v-icon>
                              </v-btn>
                              <div class="pt-2 caption">{{item['like_num']}}</div>
                              
                              <v-btn class="" text icon color="red lighten-2">
                                <v-icon small>mdi-thumb-down</v-icon>
                              </v-btn>
                              <div class="pt-2 pr-3 caption">{{item['hate_num']}}</div>
                            </v-row>
                          </v-list-item-content>
                        </v-col>
                      </v-row>
                      
                    </v-col>
                    
                    </v-list-item>
                  <v-divider :key="index"></v-divider>
                  </template>
                </v-list>
                </v-card>
              </v-tab-item>

              <!-- 공감비율순 -->
              <v-tab-item>
                <v-card flat
                  max-width="1000px"
                  class="mx-auto">
                <v-list dense class="pa-0 ma-0">
                  <template class="pa-0 ma-0" v-for="(item,index) in like_rate_order_list">
                    <v-list-item
                    :key="item['naver_news_id']"
                    v-on:click="(item)"
                    class="pa-0 ma-0"
                    >
                    <v-col class="pa-0 ma-0">
                      <v-row class="pa-0 ma-0">
                        <v-list-item-avatar class="pa-0 ma-0">
                          <v-icon>mdi-emoticon</v-icon>
                        </v-list-item-avatar>
                        <v-col class="pa-0 ma-0">
                        <v-list-item-content class="pt-2 pr-2 ma-0">
                          
                            <v-list-item-title class="pt-2" style="red" v-text="item['user_nick']"></v-list-item-title>
                            
                            <div class="caption" v-html="item['reply']"></div>
                            <!-- <v-list-item-subtitle v-text="item['date_time']"></v-list-item-subtitle> -->
                            <!-- <v-list-item-subtitle v-html="item['reply']"></v-list-item-subtitle> -->
                            <v-row class="pa-0 ma-0">
                              <!-- <div v-text="item['date_time']"></div> -->
                              <div class="pt-2 mr-2 caption">{{$moment(item.date).format('YYYY-MM-DD')}}</div>
                              <v-spacer></v-spacer>
                              <v-btn text icon color="blue lighten-2">
                                <v-icon small>mdi-thumb-up</v-icon>
                              </v-btn>
                              <div class="pt-2 caption">{{item['like_num']}}</div>
                              
                              <v-btn class="" text icon color="red lighten-2">
                                <v-icon small>mdi-thumb-down</v-icon>
                              </v-btn>
                              <div class="pt-2 pr-3 caption">{{item['hate_num']}}</div>
                            </v-row>
                          </v-list-item-content>
                        </v-col>
                      </v-row>
                      
                    </v-col>
                    
                    </v-list-item>
                  <v-divider :key="index"></v-divider>
                  </template>
                </v-list>
                </v-card>
              </v-tab-item>
              <!-- <v-tab-item>
                <v-card flat>
                <v-list dense shaped>
                  <template v-for="(item) in like_rate_order_list">
                    <v-list-item
                    :key="item['naver_news_id']"
                    v-on:click="greet"
                    >
                    <v-list-item-avatar>
                      <v-icon>mdi-emoticon</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item['reply']"></v-list-item-title>
                      <v-list-item-subtitle v-text="item['date']"></v-list-item-subtitle>
                    </v-list-item-content>

                    <div>
                      <v-btn class="ma-2" text icon color="blue lighten-2">
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-btn>
                      {{item['like_num']}}
                      <v-btn class="ma-2" text icon color="red lighten-2">
                        <v-icon>mdi-thumb-down</v-icon>
                      </v-btn>
                      {{item['hate_num']}}
                    </div>
                    </v-list-item>
                  </template>
                </v-list>
                </v-card>
              </v-tab-item> -->
              <!-- 감정순 --> 
              <v-tab-item>
                <v-card flat
                  max-width="1000px"
                  class="mx-auto">
                <v-list dense class="pa-0 ma-0">
                  <template class="pa-0 ma-0" v-for="(item,index) in sent_order_list">
                    <v-list-item
                    :key="item['naver_news_id']"
                    v-on:click="greet(item)"
                    class="pa-0 ma-0"
                    >
                    <v-col class="pa-0 ma-0">
                      <v-row class="pa-0 ma-0">
                        <v-list-item-avatar class="pa-0 ma-0">
                          <v-icon>mdi-emoticon</v-icon>
                        </v-list-item-avatar>
                        <v-col class="pa-0 ma-0">
                        <v-list-item-content class="pt-2 pr-2 ma-0">
                          
                            <v-list-item-title class="pt-2" style="red" v-text="item['user_nick']"></v-list-item-title>
                            
                            <div class="caption" v-html="item['reply']"></div>
                            <!-- <v-list-item-subtitle v-text="item['date_time']"></v-list-item-subtitle> -->
                            <!-- <v-list-item-subtitle v-html="item['reply']"></v-list-item-subtitle> -->
                            <v-row class="pa-0 ma-0">
                              <!-- <div v-text="item['date_time']"></div> -->
                              <div class="pt-2 mr-2 caption">{{$moment(item.date).format('YYYY-MM-DD')}}</div>
                              <v-spacer></v-spacer>
                              <v-btn text icon color="blue lighten-2">
                                <v-icon small>mdi-thumb-up</v-icon>
                              </v-btn>
                              <div class="pt-2 caption">{{item['like_num']}}</div>
                              
                              <v-btn class="" text icon color="red lighten-2">
                                <v-icon small>mdi-thumb-down</v-icon>
                              </v-btn>
                              <div class="pt-2 pr-3 caption">{{item['hate_num']}}</div>
                            </v-row>
                          </v-list-item-content>
                        </v-col>
                      </v-row>
                      
                    </v-col>
                    
                    </v-list-item>
                  <v-divider :key="index"></v-divider>
                  </template>
                </v-list>
                </v-card>
              </v-tab-item>
              <!-- <v-tab-item>
                <v-card flat>
                <v-list dense shaped>
                  <template v-for="(item) in sent_order_list">
                    <v-list-item
                    :key="item['naver_news_id']"
                    v-on:click="greet"
                    >
                    <v-list-item-avatar>
                      <v-icon>mdi-emoticon</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title v-text="item['reply']"></v-list-item-title>
                      <v-list-item-subtitle v-text="item['date']"></v-list-item-subtitle>
                    </v-list-item-content>

                    <div>
                      <v-btn class="ma-2" text icon color="blue lighten-2">
                        <v-icon>mdi-thumb-up</v-icon>
                      </v-btn>
                      {{item['like_num']}}
                      <v-btn class="ma-2" text icon color="red lighten-2">
                        <v-icon>mdi-thumb-down</v-icon>
                      </v-btn>
                      {{item['hate_num']}}
                    </div>
                    </v-list-item>
                  </template>
                </v-list>
                </v-card>
              </v-tab-item> -->
            </v-tabs-items>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-row>
            <v-card class="pr-10 ml-2" outlined height="220px" width="380px" align="center">
              <GChart id="gg"
                type="ScatterChart"
                :data="chartData"
                :options="scatter_chartOptions"
                :events="chartEvents"
                ref="gChart"
                style="height: 190px; width: 370px;"
              />    
            </v-card>
           
          </v-row>
          <v-row>
            <v-card class="ml-2 mt-2" outlined width="380px" align="center">
            <d3-network
              :class="reply_kg"
              ref='net2' 
              :net-nodes="node_0623" 
              :net-links="kg_0623"
              :options="comment_kg_options"  
              :link-cb="lcb"
              :fontSize="1"
              @node-click="nodeClick"  
            />
            </v-card>
          </v-row>
          
        </v-col>
        
        <v-col cols="12" md="3">
          <v-card height="435" outlined>
            <v-tabs background-color="#c2dbde" centered height="30px">
            <v-tabs-slider color="#83aeb2"></v-tabs-slider>
            <v-tab width="300" class="caption black--text">Fact Check</v-tab>
            <v-tab-item>
              <v-card
                class="mx-auto pa-0 mt-2"
                max-width="250"
                min-width="250"
                outlined
              >
          
                <v-card-title class="overline">
                  [팩트체크]"신종 코로나, 5일 생존하는 공기감염병"…사실은?
                </v-card-title>
            
                <v-card-subtitle class="caption">
                  한편, 최 위원장도 앞서 말한대로 "(바이러스가) 일반 대기에서는 사멸한다"며 공기 감염과는 선을 그었다. 그는 마스크 착용과 관련해서도 "특별한 질병 없이 일상생활을 영위하는 정상 성인이 야외활동을 할 때 모든 상황에서 반드시 마스크를 써야 하는 것은 아니다"라고 설명했다. 
                </v-card-subtitle>
            
              <!-- <v-card-actions>  
                <v-spacer></v-spacer>
                <div>문단보기</div>
                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
          
              <v-expand-transition>
                <div v-show="show">
                  <v-divider></v-divider>
          
                  <v-card-text>
                    전문가들은 신종 코로나바이러스가 공기감염병이라는 소문은 사실로 보기 어렵다고 말한다. 바이러스가 특정 환경에서 최대 5일 생존할 수 있다는 실험 결과가 '공기 감염' 여부로 이어지지는 않는다는 것이다.
                  </v-card-text>
                </div>
              </v-expand-transition> -->
              </v-card>
            </v-tab-item>
          </v-tabs>     

          </v-card>
        </v-col>
      </v-row>

      <!-- userDF(12) -->
      <v-row class="pl-5">
        <v-col cols="12" md="9">
          <v-card width="1155" class="mr-0">
          <v-data-table dense
            max-height="400px"
            min-height="400px"
            width="2500px"
            v-model="selectedRows"
            :headers="headers2"
            :items="user_info"
            :items-per-page="13"
            class="elevation-1"
          >
          <template v-slot:item="{ item }">
            <!-- <tr :class="'cyan'" @click="selectRow(item)"> -->
            <tr 
              :style="{background: item.isSelected ? '#e0e8e8' : ''}"
              @click="handleClick(item)" 
            >
              <td class="overline">{{item.user_nick}}</td>
              <td class="overline text-center">{{ $moment(item.user_profile_date).format('YYYY-MM-DD')}}</td>
              <td class="overline text-right">상위 {{item.user_total_rp_rank}}%</td>
              <td class="overline text-right">상위 {{item.user_response_rank}}%</td>
              <td class="overline text-right">상위 {{item.user_sympathy_rank}}%</td>
              <td class="overline text-right">{{item.user_recent_write}}</td>
              <td class="overline text-right">{{item.user_recent_delete}}</td>
              <td class="overline text-right">{{item.user_recent_sympathy}}</td>
            </tr>
          </template>
          </v-data-table>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">

          <v-card
            class="mx-auto ml-0"
            max-width="300"
            max-height="420px"
            min-height="420px"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">{{ $moment(user_card_date).format('YYYY-MM-DD')}}부터 활동 시작</div>
                <v-list-item-title class="h4 mb-1"> {{user_card_nick}} </v-list-item-title>
                <!-- <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle> -->
              </v-list-item-content>

            </v-list-item>
            <!-- <v-spacer></v-spacer> -->
            <v-divider class="mx-4"></v-divider>
            <!-- align="center" -->
            <v-card flat align="center" class="mt-6 mb-0 pl-3">
              <GChart id="pie0" 
                type="PieChart"
                :data="pieChartData"
                :options="selectPieOption"
                style="width: 240px; height:170px"
              />
            <!-- </div> -->
              <!-- <div> {{pieChartData}}</div> -->
            <!-- <div align="center" > -->
              <GChart
                class="ml=5 mt-0"
                type="BarChart"
                :data="barChartData"
                :options="barChartOptions"
                style="width: 240px; height: 130px;"
              />
            </v-card>

            
            
            
          </v-card>
          <v-row>
            
          </v-row>
        </v-col>
      </v-row>



<!-- ************************************************************ -->
<!-- ************************************************************ -->
<!-- ************************************************************ -->
<!-- ************************************************************ -->


    </v-container>
  </div>
</template>



<script>
// import VueMoment from 'vue-moment'
// import newsjj from '../assets/jj.json'
import lineTest from '../assets/line_test.json'
// import naverReply from '../assets/corona_naver_news_reply.json'
import D3Network from 'vue-d3-network'
import * as d3 from 'd3'
import axios from 'axios';
// import kgNode from '../assets/node_name_list.json'
// import kgList from '../assets/kg_list.json'
// import sampleNode from '../assets/node_name_list2.json'
// import sampleLink from '../assets/kg_list2.json'
// import fact_kf from '../assets/fact_knowledge_df.json'
// import nodeNameList from '../assets/node_name_list2.json'
import cur_comments_info_df from '../assets/cur_comments_info_df.json'
import { GChart } from 'vue-google-charts'
import kg_0623 from '../assets/0623_kg_list.json'
import node_0623 from '../assets/0623_node_name_list.json'
// import VueGoogleCharts from 'vue-google-charts'

export default {
  el: '#app',
  components: {
	D3Network,
  GChart,
  // VueMoment
  },
  name: 'UserList',
  data () {
    // var time_senti = new Array();
    let json = require('../assets/0608cur_comments_info_df.json');
    var data_table = new Array();
    var date_sent = new Array();
    var col = new Array();
    var col2 = new Array();
    col.push({type:"date",label:"Date",id:"date"})
    col.push({type:"number",label:"sentiment",id:"sentiment"})
    col.push({type:"number",label:"id",id:"id"})
    col2.push({type:"date",label:"Date",id:"date"})
    col2.push({type:"number",label:"sentiment",id:"sentiment"})
    col2.push({type: 'string', role: 'style'})
    data_table.push(col)
    date_sent.push(col2)
		for(let i=0; i<json.length; i++){
      var arr = new Array();
      var arr2 = new Array();
			var date = new Date(json[i]['date']);
      var sentiment = json[i]['sentiment'];
      var id = json[i]['naver_news_comments_id']
      
			arr.push(date);
      arr.push(sentiment);
      arr.push(id);
      arr2.push(date);
      arr2.push(sentiment);

      var point_style ='point { size: '
      var point_size = 3;
      if(json[i]['like']<10){
        point_size=3;
        point_style += point_size;
      }
      else {
        point_size = 3+ Math.sqrt(json[i]['like']+json[i]['hate']+json[i]['re_reply_num'])/2;
        point_style += point_size;
      }
      if(sentiment>0.8){
        point_style += '; fill-color: #A9C571; }' //#00a163
        arr2.push(point_style)
      }
      else if(sentiment>0.6){
        point_style += '; fill-color: #CFCE76; }' //ffdb3b
        arr2.push(point_style)
        // arr2.push('point { size: 10; fill-color: #ffdb3b; }')
      }
      else if(sentiment>0.4){
        point_style += '; fill-color: #F9D87B; }' //ffdb3b
        arr2.push(point_style)
        // arr2.push('point { size: 10; fill-color: #ffdb3b; }')
      }
      else if(sentiment>0.2){
        point_style += '; fill-color: #E4A978; }' //ffdb3b
        arr2.push(point_style)
        // arr2.push('point { size: 10; fill-color: #ffdb3b; }')
      }
      else{
        point_style += '; fill-color: #CD7775; }' //ff4f3b
        arr2.push(point_style)
        // arr2.push('point { size: 17; fill-color: #ff4f3b; }')
      }

      
      data_table.push(arr);
      date_sent.push(arr2);
    }
    
    // <date_sent>
    // date |  sentiment
    // 2019 |  0.3

    // <data_table>
    // date |  sentiment |  id
    // 2019 |  0.3       |  83
    // var dyn_node_list = new Array();
    // var dyn_link_list = new Array();

    // for(let i=0; i<dyn_node.length;i++){
    //   var dict = {};
    //   dict['node_id']= dyn_node[i]['node_id'];
    //   dict['node_name']= dyn_node[i]['node_name'];
    //   dyn_node_list.push(dict)
    // }
    // for(let i=0; i<dyn_link.length;i++){
    //   var dict = {};
    //   dict['sid']= dyn_node[i]['sid'];
    //   dict['tid']= dyn_node[i]['tid'];
    //   dict['link_name']= dyn_node[i]['link_name'];
    //   dict['_color']= dyn_node[i]['_color'];
    //   dyn_link_list.push(dict)
    // }
    return {
      node_0623: node_0623,
      kg_0623: kg_0623,
      theme_1: '코로나19 전염',
      theme_2: '코로나19 변이',
      theme_3: '코로나19 위험',
      click_test_selected:[],
      clic_test_search: '',
      auto_select: ['Vuetify', 'Programming'],
      auto_items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
      ],
      autoUpdate: true,
      friends: ['Sandra Adams', 'Britta Holt'],
      isUpdating: false,
      name: 'Midnight Crew',
      title: 'The summer breeze',
      itemsPerPageArray: [10,20,30],
      // search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 2,
      sortBy: 'nickname',
      keys2:[
        "nickname",
        "활동명",
        "활동 기간",
        "히스토리",
        "현재 댓글",
        "현재 답글",
        "받은 공감",
        "최근 30일 작성",
        "최근 30일 삭제",
        "최근 30일 공감",
        "최근 30일 받은공감률",
        "최근 30일 본인삭제율"
      ],
      real_key:[
        'nickname',
        'user_nick',
        'user_date',
        'user_history',
        'user_total_rp',
        'user_response',
        'user_sympathy',
        'user_recent_write',
        'user_recent_delete',
        'user_recent_sympathy',
        'user_recent_sympathy_rate',
        'user_recent_delete_rate'
      ],
      viewer: {
          w: 600,
          h: 600
      },
      zoom: {
          x: 20,
          y: 0,
          k: 1
      },
      chartEvents: {
        'select': () => {         
          const table = this.$refs.gChart.chartObject;
          const selection = table.getSelection();
          var row = selection[0].row;
          var reply_id = data_table[row][2]

          // var idx = table.indexOf(selection)
          // var idOfObj = data_table[idx][2]
          var newArr = json.filter(function(item){    
            return item.naver_news_comments_id === reply_id;
          });
          // selection[0].row, selection[0].column
          // var value = table.getValue(0,0)
          const onSelectionMeaasge = selection.length !== 0 ? JSON.stringify(newArr[0]['reply']) : 'row was diselected'
          alert(onSelectionMeaasge);
        }
      },
      chartData: date_sent,
      data_table: data_table,
      scatter_chartOptions: {
				chart: {
          // width: 700,
          // height: 500,
					title: 'Age vs. Weight comparison',
          hAxis: {title: 'date'},
          vAxis: {title: 'sentiment'},
          // legend: {position: 'top', textStyle: { fontSize: 10}},
          
          chartArea: {width:'95%',height:'90%'}
        },
        hAxis: {title: 'write time'},
        vAxis: {title: 'sentiment'},
        // series: {
        //     0: { color: '#a561bd' },
        //     1: { color: '#c784de' },
        //     2: { color: '#f1ca3a' },
        //     3: { color: '#2980b9' },
        //     4: { color: '#e67e22' }
        // },
				colors: ['#f27777','#ace88b', '#fff394'],
        crosshair: { trigger: 'both' },
        legend: 'none',
      },
      singleSelect: false,
      select: [],
      headers: [
          {
            text: 'Nickname',
            align: 'start',
            sortable: false,
            value: 'nickname',
          },
          { text: 'user_nick', value: 'user_nick' },
          { text: 're_reply_num', value: 're_reply_num' },
          { text: 'like', value: 'like' },
          { text: 'hate', value: 'hate' },
          { text: 'sentiment', value: 'sentiment' },
        ],
      
      headers2:[
        {
          text: '닉네임',
          align: 'center',
          soratble: false,
          value: 'user_nick',
          class: 'color_header overline font-weight-bold',
          width: '110px'
        },
        { 
          text: '활동 시작날짜',
          align: 'center',
          value: 'user_date',
          class: 'color_header overline font-weight-bold',
          width: '100px'
        },
        { 
          text: '누적 작성 댓글 개수',
          align: 'center',
          // align: 'end',
          width: '90px',
          value: 'user_total_rp',
          class: 'color_header overline font-weight-bold' 
          },
        { 
          text: '누적 받은 답글 수',
          align: 'center',
          // align: 'end',
          width: '95px',
          value: 'user_response',
          class: 'color_header overline font-weight-bold' 
        },
        { 
          text: '누적 받은 공감 수',
          align: 'center',
          // align: 'end',
          width: '95px',
          value: 'user_sympathy',
          class: 'color_header overline font-weight-bold' 
        },
        { 
          text: '30일 내 작성 댓글 수',
          align: 'center',
          // align: 'end',
          width: '95px',
          value: 'user_recent_write' ,
          class: 'color_header overline font-weight-bold'
        },
        { 
          text: '30일 내 삭제 댓글 수',
          align: 'center',
          // align: 'end',
          width: '80px',
          value: 'user_recent_delete',
          class: 'color_header overline font-weight-bold' 
        },
        { text: '30일 내 공감 댓글 수', 
          align: 'center',
          width: '80px',
          value: 'user_recent_sympathy',
          class: 'color_header overline font-weight-bold'  
        },
        // { text: '30일 내 받은 공감율', value: 'user_recent_sympathy_rate' },
        // { text: '30일 내 본인 삭제율', value: 'user_recent_delete_rate' }      
      ],
			cur_comments_info_df: cur_comments_info_df,
      // nodes: kgNode, 
      // links: kgList,
      nodeSize:10,
      force : 500,
      comment_force: 100,
      canvas:false,
      offsetTop: 0,
      // newsjj: newsjj,
      lineTest: lineTest,
      // naverReply: naverReply,
      tab: null,
      counter: 0,
      items_title: [
        { tab: '기사1', content: 'T' },
        { tab: '기사2', content: 'Tab 2 Content' },
        { tab: '기사3', content: 'Tab 3 Content' },
        { tab: '기사4', content: 'Tab 4 Content' },
        { tab: '기사5', content: 'Tab 5 Content' }
      ],
      tab2: null,
      items2: [
        { tab2: '순공감순', content2: 'Tab 1 Content' },
        { tab2: '댓글순', content2: 'Tab 2 Content' },
        { tab2: '공감비율순', content2: 'Tab 3 Content' },
        { tab2: '감정별 분류', content2: 'Tab 4 Content' }
      ],
      tab3: null,
      items3: [
        { tab: '감정에 따른 댓글분포', content: 'Tab 1 Content' },
        { tab: 'ㅇㅇ에 따른 댓글분포', content: 'Tab 2 Content' }
      ],
      tab4: null,
      items4: [
        { tab: '이 기사의 댓글 분석', content: 'Tab 1 Content' },
        { tab: '유사 기사 포함 댓글 분석', content: 'Tab 2 Content' }
      ],
      test_tab: null,
      text: 'Lorem ipsum dolor sit amet..',
      all_items: [
        { theme: '주제1', article: '기사1' }
      ],
      // selected: [2],
      // todoItems : [],
      // db_replies: [],
      like_order_list: [],
      reply_order_list: [],
      like_rate_order_list: [],
      sent_order_list: [],
      order_list: ['like_order_list','reply_order_list','like_rate_order_list','sent_order_list'],
      dyn_node: [],
      dyn_link: [],
      // sampleNode: sampleNode,
      // sampleLink: sampleLink,
      pieData: [['',''],['',30],['',0.70]],
      pieOption: {
        legend: 'none',
        // pieSliceText:'none',
        slices:{ 
          0: {color: 'yellow'},
          1: {color: 'transparent'}
        }
      },
      pieChartData:[['',''],['긍정',60],['중립',24],['부정',16]],
      selectPie:[['',''],['긍정',60],['중립',24],['부정',16]],
      selectPieOption:{
        legend: '긍정',
        // pieSliceText:'none',
        slices:{
          // 0: {color: '#9CBC5C'}, //긍정
          // 1: {color: '#F8CF5A'}, //중립
          // 2: {color: '#C45E5C'}  //부정
          // 0: {color: '#c2dbde'}, //긍정
          // 1: {color: '#e9dbd1'}, //중립
          // 2: {color: '#aeaeb7'}  //부정
          0: {color: '#A9C571'}, //긍정
          1: {color: '#F9D87B'}, //중립
          2: {color: '#CD7775'}  //부정
        },
        chartArea:{left:50, width:'100%',height:'100%'}
      },
      barChartOptions:{
        legend: {position: 'none'},
        colors:['#abd0d0'],
        chart: {
          // width: 700,
          // height: 500,
				
          chartArea: {width:'95%',height:'90%'}
        },
      },
      updatedSelectPie:[['',''],['positive',],['neutral',],['negative',]],
      selectedRows: [],
      user_info: [],
      barChartData:[
        ['aa','비율'],
        ['최근 30일간 공감율', 0.48],
        ['최근 30일간 삭제율', 0.37]
        
        ],
      barChartOption:{},
      user_card_date:'',
      user_card_nick:'',
      user_card_text:'',
      // fact_kf: fact_kf
      // dyn_node_list: dyn_node,
      // dyn_link_list: dyn_link
      // axios_list: [],
    }
  },
  watch: {
    isUpdating (val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000)
      }
    },
  },

  created () {
    // this.axios_test();
    // this.setData()
    // this.dbLoad();
    this.like_order();
    this.reply_order();
    this.like_rate_order();
    this.sent_order();
    this.get_node();
    this.get_link();
    this.get_user_info();
    this.handleClick();
    this.nodeClick();
    this.selectRow();

    // this.getListAll();
    // this.getList();
  },
  mounted () {
    this.setZoom()
  },
  computed:{
    // pieChartData () {
    //   return [ ...this.updatedSelectPie]
    // },
    options(){
      return{
        force: this.force,
        size:{ w:300, h:400},
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels: true,
        canvas: this.canvas,
        linkWidth:2,
        // offset:{x:0, y:-100}
      }
    },
    comment_kg_options(){
      return{
        force: 400,
        size:{ w:400, h:200},
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels: true,
        canvas: this.canvas,
        linkWidth:2
      }
    },
    numberOfPages () {
      return Math.ceil(this.items222.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.real_key.filter(key => key !== `nickame`)
    },
  },
  methods:{
    // rowClick(item){

    // },
    // rowClick: function (item, row) {      
    //   row.select(true);
    //   //item.name - selected id
    // },:class="{ 'primary': props.item.isSelected }"
    selectRow(item) {
      // alert("hellohello"+item.isSelected)
      // remove isSelected from already selected item
      const prevItem = this.user_info.find(user_info => user_info.isSelected);
      if (prevItem) this.$delete(prevItem, 'isSelected');
      this.$set(item, "isSelected", true)
      // alert("hellohello"+item.isSelected)
    },
    id2date (val) {
      if (!val) return '잘못된 시간 정보'
      return new Date(parseInt(val.substring(0, 8), 16) * 1000).toLocaleString()
    },
    nodeClick(){
      alert("HI!!!!!!!!!!!!")
    },
    // updateData(){
    //   this.updatedSelectPie = 
    // },
    handleClick(value){
      // var stringToArray = (new Function("return " + value.user_history+ ";")());
     
      // this.$set(this.pieChartData[1], 1,stringToArray[0])
      // this.$set(this.pieChartData[2], 1,stringToArray[1])
      // this.$set(this.pieChartData[3], 1,stringToArray[2])
      this.$set(this.pieChartData[1], 1, value.user_history_pos)
      this.$set(this.pieChartData[2], 1, value.user_history_neu)
      this.$set(this.pieChartData[3], 1, value.user_history_neg)
      this.$set(this.barChartData[1], 1,value.user_recent_sympathy_rate)
      this.$set(this.barChartData[2], 1,value.user_recent_delete_rate)
      this.user_card_date = value.user_profile_date
      this.user_card_nick = value.user_nick
      // alert(this.pieChartData,this.barChartData ,value.nickname)

      const prevItem = this.user_info.find(user_info => user_info.isSelected);
      if (prevItem) this.$delete(prevItem, 'isSelected');
      this.$set(value, "isSelected", true)
      return value
    },
    showAlert(a){
      alert('Alert! \n' + a.calories);
    },
    click_alert(){
      alert('Alert! \n');
    },
    clickUserInfo(select_row){
      var stringToArray = (new Function("return " + select_row.user_history+ ";")());
      this.selectPie[1][1] = stringToArray[0]
      this.selectPie[2][1] = stringToArray[1]
      this.selectPie[3][1] = stringToArray[2]
    },
    getColor (user_history) {
      if (user_history > 0.67) return 'red'
      else if (user_history > 0.33) return 'orange'
      else return 'green'
    },
    remove (item) {
      const index = this.friends.indexOf(item.name)
      if (index >= 0) this.friends.splice(index, 1)
    },
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    },
    like_order: function() {
      axios.get('/api/data/like')
      .then((response)=>{
        this.like_order_list = JSON.parse(JSON.stringify(response.data))
      })
    },
    reply_order: function() {
      axios.get('/api/data/reply')
      .then((response)=>{
        this.reply_order_list = JSON.parse(JSON.stringify(response.data))
      })
    },
    like_rate_order: function() {
      axios.get('/api/data/like_rate')
      .then((response)=>{
        this.like_rate_order_list = JSON.parse(JSON.stringify(response.data))
      })
    },
    sent_order: function() {
      axios.get('/api/data/sent')
      .then((response)=>{
        this.sent_order_list = JSON.parse(JSON.stringify(response.data))
      })
    },

    get_node: function() {
      axios.get('/api/data/node')
      .then((response)=>{
        this.dyn_node = JSON.parse(JSON.stringify(response.data))
      })
    },
    get_link: function() {
      axios.get('/api/data/link')
      .then((response)=>{
        this.dyn_link = JSON.parse(JSON.stringify(response.data))
      })
    },
    get_user_info: function() {
      axios.get('/api/data/user_info')
      .then((response)=>{
        this.user_info = JSON.parse(JSON.stringify(response.data))
      })
    },
    // getList : function() {
    //   this.$http.get('/api/data').then((response) => {
    //     this.db_replies = response.data;
    //   })
    // },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
    lcb (link) {
      return link
    },
    // greet: function (event) {
    greet(item){
      alert('Hello!'+item.reply)

      var id = item.naver_news_comments_id
      // var idx =1000
      alert('hello'+typeof(id))
      // alert(typeof(this.data_table[3][2]))
      alert(JSON.stringify(this.data_table[3][2]))
      alert(typeof(JSON.stringify(this.data_table[3][2])))
      for(let i =1; i<this.chartData.length; i++){
        if(parseInt(JSON.stringify(this.data_table[i][0]))==id){
          // idx = i
        }
      }
      // const table = this.$refs.gChart.chartObjesct;
      this.$refs.gChart.setSelection({row:3,column:3});
      alert('hello')

      // const chartchart = this.$refs.gChart.chartObject;
      // this.$refs.gChart.chartObject.setSelection([{row:0,column:0}]);
      // gChart.setSelection(5,5) 
			// chartOptions.colors = ['red','#004411']
      // `event` 는 네이티브 DOM 이벤트입니다

      if (event) {
        alert(event.target.tagName)
      }
    },
    // selectHandler: function(event) {
    //   alert('A table row was selected');
    // },
    // setData () {
    //   const stratify = d3.stratify().id((d) => d.id).parentId((d) => d.parentId)
    //   const stratified = stratify(data)
    //   const tree = d3.tree().size([this.viewer.w, this.viewer.h])

    //   tree(stratified)
    //   this.nodes = stratified.descendants()
    //   this.lines = stratified.descendants().slice(1)
    // },
    // getDiagonal (d) {
    //   return `M${d.y},${d.x}C${d.parent.y + 100},${d.x} ${d.parent.y + 100},${d.parent.x} ${d.parent.y},${d.parent.x}`
    // },
    setZoom () {
      const zoom = d3.zoom().scaleExtent([1, 10]).on('zoom', this.onZoom)
      const selection = d3.select(this.$refs.svg)

      selection
        .call(zoom)
        .call(zoom.transform, this.initZoom())
    },
    initZoom () {
      this.zoom.x = 40
      this.zoom.y = 0
      this.zoom.k = 1

      return d3.zoomIdentity
        .translate(this.zoom.x, this.zoom.y)
        .scale(this.zoom.k)
    },
    onZoom () {
      this.zoom.x = d3.event.transform.x
      this.zoom.y = d3.event.transform.y
      this.zoom.k = d3.event.transform.k
    }
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');
/* tr.v-data-table__selected {
    background: #7d92f5 !important;
} */
body{
  font-family: 'PT Sans', sans-serif;
  background-color: #eee;
}
.title{
  position:absolute;
  text-align: center;
  left: 2em;
}
h1,a{
  color: skyblue;
  text-decoration: none;
}

ul.menu {
  list-style: none;
  position: absolute;
  z-index: 100;
  min-width: 20em;
  text-align: left;
}
ul.menu li{
  margin-top: 1em;
  position: relative;
}

#m-end path, #m-start{
  fill: rgba(18, 120, 98, 0.8);
}

.node{
  fill: #83aeb2;
}
.link{
  fill: #abd0d0;
}


.node-label{
  fill: black;
  font-size: .8em;
}
.link-label{
  fill: #787886;
  transform: translate(0,.5em);
  font-size: .8em;
  text-align: left;
}
ul.menu {
  list-style: none;
  position: absolute;
  z-index: 100;
  min-width: 20em;
  text-align: left;
}
ul.menu li{
  margin-top: 1em;
  position: relative;
}

.color_header{
  background-color: #c2dbde;
}

.replies_tab_color{
  background-color: red;
}

input[type=range] { 
  background: red; 
}





</style>

