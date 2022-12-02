import React, { Component } from "react";
import PageHeader from "../Components/PageHeader";

export default class BetDetails extends Component {
  render() {
    return (
      <>
        <PageHeader title="Match & Session Bet Details MatchCode" />

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* /.card */}
                <div className="card">
                  <div className="card-header ">
                    <div className="form-row col-md-9">
                      <div className="form-group col-md-4" data-select2-id={4}>
                        <label htmlFor="name">Client</label>
                        <select
                          className="form-control select2 select2-hidden-accessible"
                          required
                          onchange="select()"
                          id="client_id"
                          placeholder="Select Client"
                          name="client"
                          data-select2-id="name"
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <option value={0} data-select2-id={2}>
                            Select Client...
                          </option>
                          <option value={2219} data-select2-id={8}>
                            C3219 Hemandra
                          </option>
                          <option value={2765} data-select2-id={9}>
                            C3765 Rahul k
                          </option>
                          <option value={2921} data-select2-id={10}>
                            C3921 TANNU
                          </option>
                          <option value={3140} data-select2-id={11}>
                            C4140 Saurabh
                          </option>
                          <option value={3248} data-select2-id={12}>
                            C4248 Bhrt bk
                          </option>
                          <option value={3193} data-select2-id={13}>
                            C4193 Chiku
                          </option>
                          <option value={624} data-select2-id={14}>
                            C1624 Pankaj g
                          </option>
                          <option value={3388} data-select2-id={15}>
                            C4388 Aaaaa
                          </option>
                          <option value={2106} data-select2-id={16}>
                            C3106 Daru bala
                          </option>
                          <option value={2993} data-select2-id={17}>
                            C3993 Jain
                          </option>
                          <option value={3240} data-select2-id={18}>
                            C4240 Monu gb
                          </option>
                          <option value={3246} data-select2-id={19}>
                            C4246 Jitendra
                          </option>
                          <option value={3270} data-select2-id={20}>
                            C4270 Monty gb
                          </option>
                          <option value={2138} data-select2-id={21}>
                            C3138 Vinay
                          </option>
                          <option value={2805} data-select2-id={22}>
                            C3805 Raj
                          </option>
                          <option value={2795} data-select2-id={23}>
                            C3795 Ashok k
                          </option>
                          <option value={1061} data-select2-id={24}>
                            C2061 dewasis
                          </option>
                          <option value={1566} data-select2-id={25}>
                            C2566 PREMA HB
                          </option>
                          <option value={3390} data-select2-id={26}>
                            C4390 Mk002
                          </option>
                          <option value={3377} data-select2-id={27}>
                            C4377 Manish
                          </option>
                          <option value={2618} data-select2-id={28}>
                            C3618 Adety
                          </option>
                          <option value={3307} data-select2-id={29}>
                            C4307 Narendra
                          </option>
                          <option value={1851} data-select2-id={30}>
                            C2851 Sectry
                          </option>
                          <option value={3374} data-select2-id={31}>
                            C4374 Abcd
                          </option>
                          <option value={3381} data-select2-id={32}>
                            C4381 Atul 2
                          </option>
                          <option value={3232} data-select2-id={33}>
                            C4232 Jai bhai
                          </option>
                          <option value={1690} data-select2-id={34}>
                            C2690 Sanjay
                          </option>
                          <option value={859} data-select2-id={35}>
                            C1859 Alok
                          </option>
                          <option value={3261} data-select2-id={36}>
                            C4261 Tony 2 b
                          </option>
                          <option value={2410} data-select2-id={37}>
                            C3410 Raina
                          </option>
                          <option value={3396} data-select2-id={38}>
                            C4396 Devansh
                          </option>
                          <option value={432} data-select2-id={39}>
                            C1432 Mohan
                          </option>
                          <option value={1242} data-select2-id={40}>
                            C2242 Raj
                          </option>
                          <option value={3278} data-select2-id={41}>
                            C4278 Raja. Ji
                          </option>
                          <option value={3227} data-select2-id={42}>
                            C4227 Samar bb
                          </option>
                          <option value={3392} data-select2-id={43}>
                            C4392 Harsh
                          </option>
                          <option value={2514} data-select2-id={44}>
                            C3514 Shivam
                          </option>
                          <option value={3375} data-select2-id={45}>
                            C4375 Aman
                          </option>
                          <option value={3199} data-select2-id={46}>
                            C4199 ANNU BHAI
                          </option>
                          <option value={2129} data-select2-id={47}>
                            C3129 Manoj
                          </option>
                          <option value={2270} data-select2-id={48}>
                            C3270 Afzaal bhai
                          </option>
                          <option value={2016} data-select2-id={49}>
                            C3016 Rana
                          </option>
                          <option value={2735} data-select2-id={50}>
                            C3735 agdhhcg
                          </option>
                          <option value={2794} data-select2-id={51}>
                            C3794 Rohan
                          </option>
                          <option value={1314} data-select2-id={52}>
                            C2314 Ashu
                          </option>
                          <option value={1591} data-select2-id={53}>
                            C2591 BEEREGOWDA
                          </option>
                          <option value={2629} data-select2-id={54}>
                            C3629 Surandj
                          </option>
                          <option value={3195} data-select2-id={55}>
                            C4195 BABA BHAI
                          </option>
                          <option value={3337} data-select2-id={56}>
                            C4337 Pradnath
                          </option>
                          <option value={2291} data-select2-id={57}>
                            C3291 Deepak
                          </option>
                          <option value={1536} data-select2-id={58}>
                            C2536 Roxsatar
                          </option>
                          <option value={2526} data-select2-id={59}>
                            C3526 Betu
                          </option>
                          <option value={3096} data-select2-id={60}>
                            C4096 Pramod
                          </option>
                          <option value={889} data-select2-id={61}>
                            C1889 Mr.singh
                          </option>
                          <option value={2763} data-select2-id={62}>
                            C3763 Bunty
                          </option>
                          <option value={3354} data-select2-id={63}>
                            C4354 Khunda 100
                          </option>
                          <option value={882} data-select2-id={64}>
                            C1882 Kuldeep bundela
                          </option>
                          <option value={688} data-select2-id={65}>
                            C1688 Anil
                          </option>
                          <option value={1083} data-select2-id={66}>
                            C2083 Tanmay
                          </option>
                          <option value={3102} data-select2-id={67}>
                            C4102 Ajay
                          </option>
                          <option value={916} data-select2-id={68}>
                            C1916 Bholeshankar
                          </option>
                          <option value={2469} data-select2-id={69}>
                            C3469 Y kushwah
                          </option>
                          <option value={1891} data-select2-id={70}>
                            C2891 Vina
                          </option>
                          <option value={2533} data-select2-id={71}>
                            C3533 Bhanu
                          </option>
                          <option value={2372} data-select2-id={72}>
                            C3372 Pawar
                          </option>
                          <option value={623} data-select2-id={73}>
                            C1623 Sonu s
                          </option>
                          <option value={3371} data-select2-id={74}>
                            C4371 Sugreeve
                          </option>
                          <option value={2176} data-select2-id={75}>
                            C3176 Udayveer
                          </option>
                          <option value={1563} data-select2-id={76}>
                            C2563 GOWDA
                          </option>
                          <option value={2435} data-select2-id={77}>
                            C3435 Khatu baba 2
                          </option>
                          <option value={3378} data-select2-id={78}>
                            C4378 Mohan
                          </option>
                          <option value={2404} data-select2-id={79}>
                            C3404 Annaaa
                          </option>
                          <option value={1372} data-select2-id={80}>
                            C2372 Ankur
                          </option>
                          <option value={2896} data-select2-id={81}>
                            C3896 Sumit
                          </option>
                          <option value={3373} data-select2-id={82}>
                            C4373 Outo
                          </option>
                          <option value={1896} data-select2-id={83}>
                            C2896 Pawan
                          </option>
                          <option value={3224} data-select2-id={84}>
                            C4224 Manik bb
                          </option>
                          <option value={810} data-select2-id={85}>
                            C1810 Ajay mithti
                          </option>
                          <option value={3274} data-select2-id={86}>
                            C4274 Kapil
                          </option>
                          <option value={1225} data-select2-id={87}>
                            C2225 Laxman
                          </option>
                          <option value={3127} data-select2-id={88}>
                            C4127 Bablu
                          </option>
                          <option value={1664} data-select2-id={89}>
                            C2664 Akash ji
                          </option>
                          <option value={3267} data-select2-id={90}>
                            C4267 Sanju
                          </option>
                          <option value={1215} data-select2-id={91}>
                            C2215 Khatu baba g
                          </option>
                          <option value={1319} data-select2-id={92}>
                            C2319 Golu
                          </option>
                          <option value={2017} data-select2-id={93}>
                            C3017 Momeen
                          </option>
                          <option value={3028} data-select2-id={94}>
                            C4028 G
                          </option>
                          <option value={3285} data-select2-id={95}>
                            C4285 Mula bhai
                          </option>
                          <option value={2429} data-select2-id={96}>
                            C3429 Sudi
                          </option>
                          <option value={2962} data-select2-id={97}>
                            C3962 Mahate
                          </option>
                          <option value={2575} data-select2-id={98}>
                            C3575 Sersingh
                          </option>
                          <option value={2727} data-select2-id={99}>
                            C3727 Rohit
                          </option>
                          <option value={2945} data-select2-id={100}>
                            C3945 Tannu
                          </option>
                          <option value={3367} data-select2-id={101}>
                            C4367 Big B
                          </option>
                          <option value={2346} data-select2-id={102}>
                            C3346 Shivam sir
                          </option>
                          <option value={2756} data-select2-id={103}>
                            C3756 PRASHANT
                          </option>
                          <option value={2579} data-select2-id={104}>
                            C3579 Sarman
                          </option>
                          <option value={1835} data-select2-id={105}>
                            C2835 Man 2
                          </option>
                          <option value={759} data-select2-id={106}>
                            C1759 Ankur
                          </option>
                          <option value={1291} data-select2-id={107}>
                            C2291 Rahul 2
                          </option>
                          <option value={3108} data-select2-id={108}>
                            C4108 San
                          </option>
                          <option value={2496} data-select2-id={109}>
                            C3496 Abhi
                          </option>
                          <option value={2667} data-select2-id={110}>
                            C3667 Kkkk
                          </option>
                          <option value={3335} data-select2-id={111}>
                            C4335 Sakal1
                          </option>
                          <option value={3257} data-select2-id={112}>
                            C4257 Subhas
                          </option>
                          <option value={2954} data-select2-id={113}>
                            C3954 Guppy
                          </option>
                          <option value={2503} data-select2-id={114}>
                            C3503 D k
                          </option>
                          <option value={3168} data-select2-id={115}>
                            C4168 Mks1
                          </option>
                          <option value={3383} data-select2-id={116}>
                            C4383 Vishal
                          </option>
                          <option value={1558} data-select2-id={117}>
                            C2558 GIRI
                          </option>
                          <option value={1099} data-select2-id={118}>
                            C2099 Sunel
                          </option>
                          <option value={3114} data-select2-id={119}>
                            C4114 Man 6428
                          </option>
                          <option value={3336} data-select2-id={120}>
                            C4336 Bhutnath
                          </option>
                          <option value={3237} data-select2-id={121}>
                            C4237 Raaz
                          </option>
                          <option value={3382} data-select2-id={122}>
                            C4382 BT
                          </option>
                          <option value={3370} data-select2-id={123}>
                            C4370 Arjun
                          </option>
                          <option value={3170} data-select2-id={124}>
                            C4170 Irfan
                          </option>
                          <option value={3196} data-select2-id={125}>
                            C4196 BANTI BABA
                          </option>
                          <option value={3095} data-select2-id={126}>
                            C4095 Poste
                          </option>
                          <option value={3254} data-select2-id={127}>
                            C4254 Rishab
                          </option>
                          <option value={1576} data-select2-id={128}>
                            C2576 RAVI PRASAD
                          </option>
                          <option value={2040} data-select2-id={129}>
                            C3040 Juber
                          </option>
                          <option value={3357} data-select2-id={130}>
                            C4357 Ba
                          </option>
                          <option value={1554} data-select2-id={131}>
                            C2554 ROHIT KUMAR
                          </option>
                          <option value={983} data-select2-id={132}>
                            C1983 Vikrant
                          </option>
                          <option value={3084} data-select2-id={133}>
                            C4084 Dimpal
                          </option>
                          <option value={2205} data-select2-id={134}>
                            C3205 Pinky
                          </option>
                          <option value={1051} data-select2-id={135}>
                            C2051 Golu
                          </option>
                          <option value={1552} data-select2-id={136}>
                            C2552 SHUBHAM GNGA
                          </option>
                          <option value={1834} data-select2-id={137}>
                            C2834 N k
                          </option>
                          <option value={2359} data-select2-id={138}>
                            C3359 Hfh
                          </option>
                          <option value={2909} data-select2-id={139}>
                            C3909 DjR
                          </option>
                          <option value={2377} data-select2-id={140}>
                            C3377 Pradhum
                          </option>
                          <option value={2848} data-select2-id={141}>
                            C3848 Pratham
                          </option>
                          <option value={2406} data-select2-id={142}>
                            C3406 Mahte
                          </option>
                          <option value={2501} data-select2-id={143}>
                            C3501 Velu
                          </option>
                          <option value={1416} data-select2-id={144}>
                            C2416 AC
                          </option>
                          <option value={3088} data-select2-id={145}>
                            C4088 Raj bhai
                          </option>
                          <option value={3406} data-select2-id={146}>
                            C4406 Udi
                          </option>
                          <option value={3216} data-select2-id={147}>
                            C4216 Harish h
                          </option>
                          <option value={3231} data-select2-id={148}>
                            C4231 Sachin
                          </option>
                          <option value={2816} data-select2-id={149}>
                            C3816 Ram
                          </option>
                          <option value={3341} data-select2-id={150}>
                            C4341 Sachin
                          </option>
                          <option value={2951} data-select2-id={151}>
                            C3951 Neeraj Tyagi
                          </option>
                          <option value={3250} data-select2-id={152}>
                            C4250 S GOWDA
                          </option>
                          <option value={3311} data-select2-id={153}>
                            C4311 Shb
                          </option>
                          <option value={1816} data-select2-id={154}>
                            C2816 Rahul
                          </option>
                          <option value={1721} data-select2-id={155}>
                            C2721 Ati
                          </option>
                          <option value={2108} data-select2-id={156}>
                            C3108 Tarun
                          </option>
                          <option value={1856} data-select2-id={157}>
                            C2856 Sudhir
                          </option>
                          <option value={1777} data-select2-id={158}>
                            C2777 ??????
                          </option>
                          <option value={2588} data-select2-id={159}>
                            C3588 Rinku ji
                          </option>
                          <option value={3247} data-select2-id={160}>
                            C4247 Bunty
                          </option>
                          <option value={3177} data-select2-id={161}>
                            C4177 Kaushik
                          </option>
                          <option value={1175} data-select2-id={162}>
                            C2175 Kake
                          </option>
                          <option value={2398} data-select2-id={163}>
                            C3398 Bata
                          </option>
                          <option value={2916} data-select2-id={164}>
                            C3916 Sukka
                          </option>
                          <option value={2478} data-select2-id={165}>
                            C3478 Neeraj bag
                          </option>
                          <option value={3213} data-select2-id={166}>
                            C4213 Anil b
                          </option>
                          <option value={1534} data-select2-id={167}>
                            C2534 Bhadde patkar
                          </option>
                          <option value={2721} data-select2-id={168}>
                            C3721 Rahul bhai 2
                          </option>
                          <option value={3234} data-select2-id={169}>
                            C4234 Sunny
                          </option>
                          <option value={2403} data-select2-id={170}>
                            C3403 Baba mahadev
                          </option>
                          <option value={2153} data-select2-id={171}>
                            C3153 Unne
                          </option>
                          <option value={2530} data-select2-id={172}>
                            C3530 Rajendra
                          </option>
                          <option value={2995} data-select2-id={173}>
                            C3995 Chotu
                          </option>
                          <option value={3401} data-select2-id={174}>
                            C4401 Risu111
                          </option>
                          <option value={1283} data-select2-id={175}>
                            C2283 Raju
                          </option>
                          <option value={1641} data-select2-id={176}>
                            C2641 Satendra
                          </option>
                          <option value={813} data-select2-id={177}>
                            C1813 Half engineering
                          </option>
                          <option value={789} data-select2-id={178}>
                            C1789 Amit
                          </option>
                          <option value={1555} data-select2-id={179}>
                            C2555 AMRIT RAJ
                          </option>
                          <option value={3001} data-select2-id={180}>
                            C4001 Jaljjjjj
                          </option>
                          <option value={3235} data-select2-id={181}>
                            C4235 Yogesh
                          </option>
                          <option value={3154} data-select2-id={182}>
                            C4154 Anuj
                          </option>
                          <option value={3346} data-select2-id={183}>
                            C4346 Vinod
                          </option>
                          <option value={1564} data-select2-id={184}>
                            C2564 SANJAY HEMANT
                          </option>
                          <option value={2564} data-select2-id={185}>
                            C3564 Shanshnk bhiya
                          </option>
                          <option value={2399} data-select2-id={186}>
                            C3399 Okokok
                          </option>
                          <option value={3221} data-select2-id={187}>
                            C4221 Kanhiya k
                          </option>
                          <option value={2405} data-select2-id={188}>
                            C3405 Ramkarn
                          </option>
                          <option value={3241} data-select2-id={189}>
                            C4241 Shyam gb
                          </option>
                          <option value={3301} data-select2-id={190}>
                            C4301 Dinesh
                          </option>
                          <option value={2683} data-select2-id={191}>
                            C3683 Lucky bhai
                          </option>
                          <option value={1538} data-select2-id={192}>
                            C2538 Ashim
                          </option>
                          <option value={2627} data-select2-id={193}>
                            C3627 Jitendra
                          </option>
                          <option value={3242} data-select2-id={194}>
                            C4242 Babua gb
                          </option>
                          <option value={2381} data-select2-id={195}>
                            C3381 Gaurav
                          </option>
                          <option value={3091} data-select2-id={196}>
                            C4091 Ashish vis
                          </option>
                          <option value={3116} data-select2-id={197}>
                            C4116 Jeet
                          </option>
                          <option value={2335} data-select2-id={198}>
                            C3335 Saurabh
                          </option>
                          <option value={856} data-select2-id={199}>
                            C1856 Deepae
                          </option>
                          <option value={2313} data-select2-id={200}>
                            C3313 Monty
                          </option>
                          <option value={3192} data-select2-id={201}>
                            C4192 Visnu
                          </option>
                          <option value={3259} data-select2-id={202}>
                            C4259 Sumit bhai
                          </option>
                          <option value={3007} data-select2-id={203}>
                            C4007 Malkhan Singh
                          </option>
                          <option value={3412} data-select2-id={204}>
                            C4412 Cahat
                          </option>
                          <option value={3345} data-select2-id={205}>
                            C4345 Ankesh
                          </option>
                          <option value={3384} data-select2-id={206}>
                            C4384 Pintu bb
                          </option>
                          <option value={1758} data-select2-id={207}>
                            C2758 Man 1
                          </option>
                          <option value={1528} data-select2-id={208}>
                            C2528 Golu
                          </option>
                          <option value={1227} data-select2-id={209}>
                            C2227 Dr a singh
                          </option>
                          <option value={2424} data-select2-id={210}>
                            C3424 Yuvi
                          </option>
                          <option value={3413} data-select2-id={211}>
                            C4413 Vipin
                          </option>
                          <option value={3405} data-select2-id={212}>
                            C4405 Yuvi
                          </option>
                          <option value={1562} data-select2-id={213}>
                            C2562 GOWDA
                          </option>
                          <option value={2025} data-select2-id={214}>
                            C3025 Balaji
                          </option>
                          <option value={987} data-select2-id={215}>
                            C1987 Ttttt
                          </option>
                          <option value={2898} data-select2-id={216}>
                            C3898 Lala 2
                          </option>
                          <option value={2560} data-select2-id={217}>
                            C3560 Vola. Sankar
                          </option>
                          <option value={3414} data-select2-id={218}>
                            C4414 Amitabh
                          </option>
                          <option value={2476} data-select2-id={219}>
                            C3476 Bablu kumar
                          </option>
                          <option value={413} data-select2-id={220}>
                            C1413 Lodi
                          </option>
                          <option value={3349} data-select2-id={221}>
                            C4349 Golu..
                          </option>
                          <option value={3408} data-select2-id={222}>
                            C4408 Kartik up
                          </option>
                          <option value={2297} data-select2-id={223}>
                            C3297 boby
                          </option>
                          <option value={3415} data-select2-id={224}>
                            C4415 Rencho
                          </option>
                          <option value={3251} data-select2-id={225}>
                            C4251 Rocky
                          </option>
                          <option value={2971} data-select2-id={226}>
                            C3971 Sameer
                          </option>
                          <option value={1049} data-select2-id={227}>
                            C2049 Rathore
                          </option>
                          <option value={2024} data-select2-id={228}>
                            C3024 Rommy
                          </option>
                          <option value={2569} data-select2-id={229}>
                            C3569 Sgr
                          </option>
                          <option value={2674} data-select2-id={230}>
                            C3674 Sengar
                          </option>
                          <option value={1515} data-select2-id={231}>
                            C2515 SUNIL
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--default select2-container--below"
                          dir="ltr"
                          data-select2-id={1}
                          style={{ width: "264.742px" }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={-1}
                              aria-disabled="false"
                              aria-labelledby="select2-client_id-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-client_id-container"
                                role="textbox"
                                aria-readonly="true"
                                title="C3219 Hemandra"
                              >
                                C3219 Hemandra
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation" />
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="form-group col-md-4">
                        <label
                          className="control-label text-purple"
                          htmlFor="btn"
                        >
                          `
                        </label>
                        <input
                          type="submit"
                          className="form-control btn-primary"
                          id="btn"
                          name="submit"
                          defaultValue="Sumbit"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <div>
                      <div className="form-row">
                        <div className="col-md-6">
                          <table className="table table-responsive table-striped table-bordered">
                            <thead>
                              <tr>
                                <th
                                  className="text-center bg-secondary"
                                  colSpan={9}
                                >
                                  MATCH BETS
                                </th>
                              </tr>
                              <tr>
                                <th>#</th>
                                <th>Rate</th>
                                <th>Mode</th>
                                <th>Team</th>
                                <th>Amount</th>
                                <th>Manchester Originals Women</th>
                                <th>Welsh Fire Women</th>{" "}
                                <th>Date &amp; Time</th>
                              </tr>
                            </thead>
                            <tbody id="match_bets">
                              <tr className>
                                <td>1</td>
                                <td>0.32</td>
                                <td>LAGAI</td>
                                <td>MANCHESTER ORIGINALS WOMEN</td>
                                <td>500</td>
                                <td>160</td>
                                <td>-500</td>
                                <td>16-08-2022 21:25:59</td>
                              </tr>
                            </tbody>
                            <tbody id="match_total">
                              <tr>
                                <th className="text-center" colSpan={2}>
                                  {" "}
                                </th>
                                <th className="text-center">Total </th>
                                <th className="text-red" />
                                <th className="text-red">
                                  <span style={{ color: "#007bff" }}>500</span>
                                </th>
                                <th className="text-red">
                                  <span style={{ color: "#007bff" }}>160</span>
                                </th>
                                <th className="text-red">
                                  <span style={{ color: "red" }}>-500</span>
                                </th>
                                <th />
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-md-6">
                          <table className="table table-responsive table-striped table-bordered">
                            <thead>
                              <tr>
                                <th
                                  className="text-center bg-secondary"
                                  colSpan={8}
                                >
                                  SESSION BETS
                                </th>
                              </tr>
                              <tr>
                                <th>#</th>
                                <th>Session</th>
                                <th>Rate</th>
                                <th>Run</th>
                                <th>Mode</th>
                                <th>Amount</th>
                                <th>Dec</th>
                                <th>Date &amp; Time</th>
                              </tr>
                            </thead>
                            <tbody id="session_bet">
                              <tr className>
                                <td>1</td>
                                <td>50 BALL RUN WF W</td>
                                <td>1.00</td>
                                <td>74</td>
                                <td>Y</td>
                                <td>100 </td>
                                <td>73</td>
                                <td>16-08-2022 21:29:48</td>
                              </tr>
                              <tr className>
                                <td>2</td>
                                <td>H MATTHEWS RUN</td>
                                <td>0.9</td>
                                <td>53</td>
                                <td>Y</td>
                                <td>105 </td>
                                <td />
                                <td>16-08-2022 21:27:58</td>
                              </tr>
                              <tr className>
                                <td>3</td>
                                <td>T BEAUMONT RUN</td>
                                <td>0.9</td>
                                <td>40</td>
                                <td>Y</td>
                                <td>100 </td>
                                <td />
                                <td>16-08-2022 21:26:31</td>
                              </tr>
                              <tr className>
                                <td>4</td>
                                <td>1ST WKT RUNS WF W</td>
                                <td>0.8</td>
                                <td>80</td>
                                <td>Y</td>
                                <td>120 </td>
                                <td />
                                <td>16-08-2022 21:26:19</td>
                              </tr>
                              <tr className>
                                <td>5</td>
                                <td>1ST WKT RUNS WF W</td>
                                <td>0.9</td>
                                <td>56</td>
                                <td>Y</td>
                                <td>180 </td>
                                <td />
                                <td>16-08-2022 21:17:51</td>
                              </tr>
                              <tr className>
                                <td>6</td>
                                <td>15 BALL RUN WF W</td>
                                <td>1.00</td>
                                <td>17</td>
                                <td>N</td>
                                <td>150 </td>
                                <td>19</td>
                                <td>16-08-2022 21:03:41</td>
                              </tr>
                              <tr className>
                                <td>7</td>
                                <td>1ST WKT RUNS WF W</td>
                                <td>0.9</td>
                                <td>22</td>
                                <td>Y</td>
                                <td>100 </td>
                                <td />
                                <td>16-08-2022 20:58:56</td>
                              </tr>
                              <tr className>
                                <td>8</td>
                                <td>25 BALL RUN WF W</td>
                                <td>1.00</td>
                                <td>32</td>
                                <td>N</td>
                                <td>200 </td>
                                <td>32</td>
                                <td>16-08-2022 20:56:32</td>
                              </tr>
                              <tr className>
                                <td>9</td>
                                <td>LAMBI PARI RUNS MO W</td>
                                <td>1.00</td>
                                <td>146</td>
                                <td>Y</td>
                                <td>170 </td>
                                <td>156</td>
                                <td>16-08-2022 20:34:27</td>
                              </tr>
                              <tr className>
                                <td>10</td>
                                <td>1 TO LAMBI BALLS RUNS MO W</td>
                                <td>1.00</td>
                                <td>139</td>
                                <td>Y</td>
                                <td>200 </td>
                                <td>156</td>
                                <td>16-08-2022 20:09:02</td>
                              </tr>
                              <tr className>
                                <td>11</td>
                                <td>1 TO 50 BALL RUN MO W</td>
                                <td>1.00</td>
                                <td>62</td>
                                <td>N</td>
                                <td>140 </td>
                                <td>60</td>
                                <td>16-08-2022 20:01:31</td>
                              </tr>
                              <tr className>
                                <td>12</td>
                                <td>1 TO 50 BALL RUN MO W</td>
                                <td>1.00</td>
                                <td>56</td>
                                <td>N</td>
                                <td>200 </td>
                                <td>60</td>
                                <td>16-08-2022 19:52:51</td>
                              </tr>
                              <tr className>
                                <td>13</td>
                                <td>1 TO 10 BALL RUN MO W</td>
                                <td>1.00</td>
                                <td>9</td>
                                <td>N</td>
                                <td>140 </td>
                                <td>11</td>
                                <td>16-08-2022 19:33:22</td>
                              </tr>
                              <tr className>
                                <td>14</td>
                                <td>L LEE RUN</td>
                                <td>0.9</td>
                                <td>23</td>
                                <td>Y</td>
                                <td>100 </td>
                                <td>3</td>
                                <td>16-08-2022 19:32:26</td>
                              </tr>
                              <tr className>
                                <td>15</td>
                                <td>1ST WKT RUNS MO W</td>
                                <td>0.9</td>
                                <td>23</td>
                                <td>Y</td>
                                <td>100 </td>
                                <td>27</td>
                                <td>16-08-2022 19:31:55</td>
                              </tr>
                              <tr className>
                                <td>16</td>
                                <td>1 TO 25 BALLS RUNS MO W</td>
                                <td>1.00</td>
                                <td>30</td>
                                <td>N</td>
                                <td>220 </td>
                                <td>29</td>
                                <td>16-08-2022 19:31:48</td>
                              </tr>
                            </tbody>
                            <tfoot id="session_total">
                              <tr>
                                <th colSpan={5} className="text-center">
                                  Session Plus
                                </th>
                                <th colSpan={3} className="text-blue">
                                  <span style={{ color: "#007bff" }}>70</span>
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      </>
    );
  }
}
