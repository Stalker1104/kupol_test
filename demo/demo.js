/*variables*/{

/*volume*/{
    background_volume=1;
}
    /*просто обьявление переменных*/{
        var home_map_1=[]
        var home_map_2=[]
        var home_map_3=[]
        var home_map_4=[]
        var home_map_5=[]
        var home_map_6=[]
        var home_map_7=[]
        var home_map_8=[]
        var home_map_9=[]
        var home_map_10=[]
        var home_map_11=[]
        var home_walk_map_1=[]
        var home_walk_map_2=[]
        var home_walk_map_3=[]
        var home_walk_map_4=[]
        var home_walk_map_5=[]
        var home_walk_map_6=[]
        var home_walk_map_7=[]
        var home_walk_map_8=[]
        var home_walk_map_9=[]
        var home_walk_map_10=[]
        var home_walk_map_11=[]



}
/*audio*/{
    var speack_audio=1
    var music_onoff=true
}
/*zadania*/{
    zadania_name=["AK-47"]
    zadania_discription=["Bring AK-47 to seller"]
    zadania_revard=["3500UAH"]
}
var zadanie={
    name:"Поиск АК-47",
    discription:"Найдите и принесите торговцу АК-47",
    name_item:"AK-47"
}
var names_of_items=["Нож","ПМ","AK-47","end of weapon"]
var damage=[20,40,65]
var recoil=[0,0,0]
seller_zadania={

}
var player = {
    hp:100,
    lvl:0,
    name:"Valev",
    x:1,//27
    y:1,//29
    reserv_x:1,//27
    reserv_y:1,//29
    inv:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    str:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    headwear:{
        num:null,
        strenth:null
    },
    outerwear:{
        num:null,
        strenth:null
    },
    underwear:{
        num:null,
        strenth:null
    },
    boots:{
        num:null,
        strenth:null
    },
    weapon:{
        num:null,
        strenth:null
    },
    atk:10,
    def:0,
    eat:100,
    wat:100,
    money:1000,
    zadania:{
        name_z:     [null,null,null],
        discription:[null,null,null],
        name:       [null,null,null],
        amount:     [null,null,null],
        type:       [null,null,null],
        revard:     [null,null,null],
    }
}
var seller_data={
    item_1:null,
    item_2:null,
    item_3:null,
    item_4:null,
    zadanie_1:{
        name_z:     "",
        discription:"",
        name:       "",
        amount:     "",
        type:       "",
        revard:     "",
    },
    zadanie_2:{
        name_z:     "",
        discription:"",
        name:       "",
        amount:     "",
        type:       "",
        revard:     "",
    },
    zadanie_3:{
        name_z:     "",
        discription:"",
        name:       "",
        amount:     "",
        type:       "",
        revard:     "",
    },
}
/*items*/{
var names_of_items=["Нож","ПМ","AK-47","end of weapon","Теплая шапка","end of headwear","Куртка","end of outerwear","Штаны","end of underwear","Ботинки","end of boots","end of wearing"]
var src_of_items=  ["../img/prototype/items/ButcherKnife.png","../img/prototype/items/BadPistol.png","../img/prototype/items/ak_47.png","end of weapon","../img/prototype/items/headwear.png","end of headwear","../img/prototype/items/jaket.png","end of outerwear","../img/prototype/items/trousers.png","end of underwear","../img/prototype/items/boots.png","end of boots","end of wearing"]
var cost_of_items= [100,500,1000,null,120,null,250,null,180,null,80,null,null]
var atk_of_items=  [85,20,70,null,0,null,0,null,0,null,0,null,null]
var def_of_items=  [0,0,0,null,10,null,30,null,15,null,5,null,null]
}

var home_map = [
    ["lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"d_floor"      ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"h_hlam"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ],
    ["lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ,"lake"         ],
]
var home_walk_map = [
    [false         ,false         ,false         ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false         ,false         ,false         ],
    [false         ,false         ,false         ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false         ,false         ,false         ],
    [false         ,false         ,false         ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"d_floor"      ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"h_hlam"       ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,"floor"        ,false         ,false         ,false         ],
    [false         ,false         ,false         ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false         ,false         ,false         ],
    [false         ,false         ,false         ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false         ,false         ,false         ],
    [false         ,false         ,false         ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false          ,false         ,false         ,false         ],
]
var world_map = [ 
    //         1                  2             3             4              5//           6             7               8              9               10
    /*01*/["lake"         ,"lake"         ,"lake"         ,"lake"         , "lake"         , "lake"      , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"         , "lake"       , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"       , "lake"       , "lake"       , "lake"       , "lake"          , "lake"       , "lake"       , "lake"       , "lake"      , "lake"      , "lake"      ,"lake"       ,"lake"         ,"lake"         ,"lake"         ],
    /*02*/["lake"         ,"lake"         ,"lake"         ,"lake"         , "lake"         , "lake"      , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"         , "lake"       , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"       , "lake"       , "lake"       , "lake"       , "lake"          , "lake"       , "lake"       , "lake"       , "lake"      , "lake"      , "lake"      ,"lake"       ,"lake"         ,"lake"         ,"lake"         ],
    /*03*/["lake"         ,"lake"         ,"l_end_n_e"    ,"l_wall_s"     , "l_wall_s"     , "l_wall_s"  , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"     , "l_wall_s"   , "l_wall_s"     , "l_wall_s"     , "l_wall_s"     , "l_wall_s"     , "l_wall_s"     , "l_wall_s"     , "l_wall_s"     , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"      , "l_wall_s"   , "l_wall_s"   , "l_wall_s"   , "l_wall_s"  , "l_wall_s"  , "l_wall_s"  ,"l_wall_s"   ,"l_end_n_w"    ,"lake"         ,"lake"         ],
    /*04*/["lake"         ,"lake"         ,"l_wall_e"     ,"high_grass"   , "high_grass"   , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*05*/["lake"         ,"lake"         ,"l_wall_e"     ,"high_grass"   , "high_grass"   , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "grass"      , "luja"       , "tree"       , "grass"         , "grass"      , "bush"       , "grass"      , "grass"     , "grass"     , "tree"      , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*06*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_n_w"     , "wall_n_e"   , "hlam"         , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "tree"       , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "tree"      , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*07*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "d_wall_e"   , "wall_w"       , "wall_e"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "grass"      , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*08*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "road_s_n"  , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "asphalt"    , "asphalt"    , "wall_w"       , "wall_e"     , "asphalt"      , "wall_n_w"     , "wall_n_e"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "grass"      , "grass"      , "grass"      , "road_n_e_s"    , "road_e_w"   , "road_e_w"   , "road_s_w"   , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*09*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "road_n_e"  , "road_e_w"   , "road_e_w"   , "asphalt"    , "asphalt"    , "wall_n_w"   , "wall_n_e"   , "asphalt"    , "wall_s_w"     , "wall_s_e"   , "asphalt"      , "wall_s_w"     , "wall_s_e"     , "d_wall_w"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "road_s_n"   , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*10*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_w"     , "wall_e"     , "d_wall_w"   , "asphalt"      , "asphalt"    , "d_wall_n"     , "asphalt"      , "hlam"         , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*11*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "bush"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_s_w"   , "wall_s_e"   , "asphalt"    , "asphalt"      , "wall_n_w"   , "wall_n"       , "wall_n_e"     , "asphalt"      , "asphalt"      , "asphalt"      , "wall_n_w"     , "wall_n_e"     , "asphalt"    , "asphalt"    , "road_e_w"   , "road_e_w"   , "road_n_w"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*12*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "bush"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "hlam"       , "asphalt"    , "hlam"         , "wall_s_w"   , "wall_s"       , "wall_s_e"     , "asphalt"      , "asphalt"      , "d_wall_e"     , "wall_w"       , "wall_e"       , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "tree"       , "grass"      , "tree"      , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*13*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "bush"         , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_n_w"   , "wall_n_e"   , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "wall_n_w"     , "wall_n_e"     , "asphalt"      , "wall_w"       , "wall_e"       , "asphalt"    , "asphalt"    , "grass"      , "tree"       , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*14*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_w"     , "wall_e"     , "asphalt"      , "wall_n_w"   , "wall_n_e"     , "d_wall_w"     , "wall_w"       , "wall_e"       , "hlam"         , "wall_s_w"     , "wall_s_e"     , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*15*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_s_w"   , "wall_s_e"   , "d_wall_w"     , "wall_w"     , "wall_e"       , "d_wall_e"     , "wall_s_w"     , "wall_s_e"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "bush"          , "grass"      , "grass"      , "grass"      , "bush"      , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*16*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "bush"       , "asphalt"    , "hlam"       , "asphalt"    , "d_wall_n"   , "asphalt"      , "wall_s_w"   , "wall_s_e"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "d_wall_n"     , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "bush"      , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*17*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "tree"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "wall_n_w"   , "wall_n"     , "wall_n_e"     , "hlam"       , "asphalt"      , "d_wall_n"     , "asphalt"      , "asphalt"      , "wall_n_w"     , "wall_n"       , "wall_n_e"     , "hlam"       , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "tree"       , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*18*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "asphalt"      , "grass"     , "grass"      , "bush"       , "grass"      , "grass"      , "asphalt"    , "wall_s_w"   , "wall_s"     , "wall_s_e"     , "asphalt"    , "asphalt"      , "wall_n_w"     , "wall_n_e"     , "asphalt"      , "wall_s_w"     , "wall_s"       , "wall_s_e"     , "asphalt"    , "asphalt"    , "road_e_w"   , "road_e_w"   , "road_s_w"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*19*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "bush"       , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "wall_s_w"     , "wall_s_e"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "bush"      , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*20*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "asphalt"    , "grass"      , "road_n_e_s"    , "road_e_w"   , "road_s_w"   , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*21*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "road_s_n"   , "grass"      , "grass"      , "grass"      , "luja"       , "grass"      , "grass"      , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"        , "grass"      , "grass"      , "luja"       , "grass"      , "road_s_n"      , "grass"      , "road_n_e"   , "road_e_w"   , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*22*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "road_s_n"   , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "road_s_n"   , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"        , "grass"        , "tree"       , "grass"      , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*23*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "road_s_n"   , "grass"      , "road_s_n"   , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "road_s_n"   , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "bush"       , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*24*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "road_n_e"   , "road_e_w"   , "road_w_n_e" , "road_e_w"   , "road_e_w"   , "road_e_w"   , "road_e_w"   , "road_e_w"     , "road_w_n_e" , "road_e_w"     , "road_s_w"     , "grass"        , "high_grass"   , "high_grass"   , "high_grass"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "road_n_e"      , "road_e_w"   , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*25*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "tree"       , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "road_s_n"     , "grass"        , "high_grass"   , "high_grass"   , "high_grass"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "bush"       , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*26*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "road_s_n"     , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*27*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "tree"       , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*28*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "l_wall_n_w" , "l_wall_n"   , "l_wall_n_e" , "grass"      , "high_grass" , "high_grass" , "high_grass" , "grass"        , "grass"      , "grass"        , "l_wall_n_w"   , "l_wall_n"     , "l_wall_n"     , "l_wall_n"     , "l_wall_n_e"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "bush"      , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*29*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "tree"         , "grass"     , "l_wall_s_w" , "l_wall_s"   , "l_wall_s_e" , "grass"      , "high_grass" , "high_grass" , "high_grass" , "grass"        , "grass"      , "grass"        , "l_wall_w"     , "lake"         , "lake"         , "lake"         , "l_wall_e"     , "grass"        , "grass"      , "grass"      , "bush"       , "grass"      , "luja"          , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*30*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "high_grass" , "high_grass" , "grass"      , "grass"        , "grass"      , "grass"        , "l_wall_w"     , "lake"         , "lake"         , "lake"         , "l_wall_e"     , "grass"        , "grass"      , "bush"       , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "tree"       , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*31*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "high_grass" , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "l_wall_s_w"   , "l_wall_s"     , "l_wall_s"     , "l_wall_s"     , "l_wall_s_e"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "tree"       , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*32*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "high_grass" , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*23*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*33*/["lake"         ,"lake"         ,"l_wall_e"     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "high_grass" , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "high_grass"   , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,"l_wall_w"     ,"lake"         ,"lake"         ],
    /*34*/["lake"         ,"lake"         ,"l_end_s_e"    ,"l_wall_n"     , "l_wall_n"     , "l_wall_n"  , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"     , "l_wall_n"   , "l_wall_n"     , "l_wall_n"     , "l_wall_n"     , "l_wall_n"     , "l_wall_n"     , "l_wall_n"     , "l_wall_n"     , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"      , "l_wall_n"   , "l_wall_n"   , "l_wall_n"   , "l_wall_n"  , "l_wall_n"  , "l_wall_n"  ,"l_wall_n"   ,"l_end_s_w"    ,"lake"         ,"lake"         ],
    /*35*/["lake"         ,"lake"         ,"lake"         ,"lake"         , "lake"         , "lake"      , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"         , "lake"       , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"       , "lake"       , "lake"       , "lake"       , "lake"          , "lake"       , "lake"       , "lake"       , "lake"      , "lake"      , "lake"      ,"lake"       ,"lake"         ,"lake"         ,"lake"         ],
    /*36*/["lake"         ,"lake"         ,"lake"         ,"lake"         , "lake"         , "lake"      , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"       , "lake"         , "lake"       , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"         , "lake"       , "lake"       , "lake"       , "lake"       , "lake"          , "lake"       , "lake"       , "lake"       , "lake"      , "lake"      , "lake"      ,"lake"       ,"lake"         ,"lake"         ,"lake"         ]
    
    

];
var world_walk_map = [ 
    //         1                  2             3             4              5//           6             7               8              9               10
    /*01*/[false         ,false         ,false         ,false         , false         , false      , false       , false       , false       , false       , false       , false       , false       , false         , false       , false         , false         , false         , false         , false         , false         , false         , false       , false       , false       , false       , false          , false       , false       , false       , false      , false      , false      ,false       ,false         ,false         ,false         ],
    /*02*/[false         ,false         ,false         ,false         , false         , false      , false       , false       , false       , false       , false       , false       , false       , false         , false       , false         , false         , false         , false         , false         , false         , false         , false       , false       , false       , false       , false          , false       , false       , false       , false      , false      , false      ,false       ,false         ,false         ,false         ],
    /*03*/[false         ,false         ,false         ,false     , false     , false  , false   , false   , false   , false   , false   , false   , false   , false     , false   , false     , false     , false     , false     , false     , false     , false     , false   , false   , false   , false   , false      , false   , false   , false   , false  , false  , false  ,false       ,false         ,false         ,false         ],
    /*04*/[false         ,false         ,false     ,"high_grass"   , "high_grass"   , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*05*/[false         ,false         ,false     ,"high_grass"   , "high_grass"   , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "grass"      , "luja"       , "tree"       , "grass"         , "grass"      , "bush"       , "grass"      , "grass"     , "grass"     , "tree"      , "grass"     ,false     ,false         ,false         ],
    /*06*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , false     , false   , "hlam"         , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "tree"       , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "tree"      , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*07*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "d_wall_w"   , false       , false     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "grass"      , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*08*/[false         ,false         ,false     ,"grass"        , "grass"        , "road_s_n"  , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "asphalt"    , "asphalt"    , false       , false     , "asphalt"      , false     , false     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"      , "grass"      , "grass"      , "grass"      , "road_n_e_s"    , "road_e_w"   , "road_e_w"   , "road_s_w"   , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*09*/[false         ,false         ,false     ,"grass"        , "grass"        , "road_n_e"  , "road_e_w"   , "road_e_w"   , "asphalt"    , "asphalt"    , false   , false   , "asphalt"    , false     , false   , "asphalt"      , false     , false     , "d_wall_w"     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "road_s_n"   , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*10*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     ,"grass"       , "grass"      , "asphalt"    , "asphalt"    , false     , false     , "d_wall_e"   , "asphalt"      , "asphalt"    , "d_wall_n"     , "asphalt"      , "hlam"         , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*11*/[false         ,false         ,false     ,"grass"        , "grass"        , "bush"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , false   , false   , "asphalt"    , "asphalt"      , false   , false       , false     , "asphalt"      , "asphalt"      , "asphalt"      , false     , false     , "asphalt"    , "asphalt"    , "road_e_w"   , "road_e_w"   , "road_n_w"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*12*/[false         ,false         ,false     ,"grass"        , "grass"        , "bush"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "hlam"       , "asphalt"    , "hlam"         , false   , false       , false     , "asphalt"      , "asphalt"      , "d_wall_e"     , false       , false       , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "tree"       , "grass"      , "tree"      , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*13*/[false         ,false         ,false     ,"grass"        , "bush"         , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , false   , false   , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , false     , false     , "asphalt"      , false       , false       , "asphalt"    , "asphalt"    , "grass"      , "tree"       , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*14*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , false     , false     , "d_wall_w"     , false   , false     , "d_wall_w"     , false       , false       , "hlam"         , false     , false     , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*15*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , false   , false   , "asphalt"      , false     , false       , "d_wall_e"     , false     , false     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "bush"          , "grass"      , "grass"      , "grass"      , "bush"      , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*16*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "bush"       , "asphalt"    , "hlam"       , "asphalt"    , "d_wall_n"   , "asphalt"      , false   , false     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "d_wall_n"     , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "bush"      , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*17*/[false         ,false         ,false     ,"grass"        , "grass"        , "tree"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"    , false   , false     , false     , "hlam"       , "asphalt"      , "d_wall_n"     , "asphalt"      , "asphalt"      , false     , false       , false     , "hlam"       , "asphalt"    , "grass"      , "grass"      , "grass"         , "grass"      , "tree"       , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*18*/[false         ,false         ,false     ,"grass"        , "asphalt"      , "grass"     , "grass"      , "bush"       , "grass"      , "grass"      , "asphalt"    , false   , false     , false     , "asphalt"    , "asphalt"      , false     , false     , "asphalt"      , false     , false       , false     , "asphalt"    , "asphalt"    , "road_e_w"   , "road_e_w"   , "road_s_w"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*19*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "bush"       , "grass"      , "grass"      , "asphalt"    , "asphalt"    , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , false     , false     , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "bush"      , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*20*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "asphalt"    , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"    , "asphalt"    , "asphalt"    , "grass"      , "road_n_e_s"    , "road_e_w"   , "road_s_w"   , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*21*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "road_s_n"   , "grass"      , "grass"      , "grass"      , "luja"       , "grass"      , "grass"      , "asphalt"      , "asphalt"    , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"        , "grass"      , "grass"      , "luja"       , "grass"      , "road_s_n"      , "grass"      , "road_n_e"   , "road_e_w"   , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*22*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "road_s_n"   , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "road_s_n"   , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "asphalt"      , "grass"        , "grass"        , "tree"       , "grass"      , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*23*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "road_s_n"   , "grass"      , "road_s_n"   , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "road_s_n"   , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "road_s_n"      , "grass"      , "grass"      , "bush"       , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*24*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "road_n_e"   , "road_e_w"   , "road_w_n_e" , "road_e_w"   , "road_e_w"   , "road_e_w"   , "road_e_w"   , "road_e_w"     , "road_w_n_e" , "road_e_w"     , "road_s_w"     , "grass"        , "high_grass"   , "high_grass"   , "high_grass"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "road_n_e"      , "road_e_w"   , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*25*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "tree"       , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "road_s_n"     , "grass"        , "high_grass"   , "high_grass"   , "high_grass"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "bush"       , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*26*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "road_s_n"     , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*27*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "tree"       , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*28*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , false , false   , false , "grass"      , "high_grass" , "high_grass" , "high_grass" , "grass"        , "grass"      , "grass"        , false   , false     , false     , false     , false   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "bush"      , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*29*/[false         ,false         ,false     ,"grass"        , "tree"         , "grass"     , "l_wall_s_w" , false   , "l_wall_s_e" , "grass"      , "high_grass" , "high_grass" , "high_grass" , "grass"        , "grass"      , "grass"        , false     , false         , false         , false         , false     , "grass"        , "grass"      , "grass"      , "bush"       , "grass"      , "luja"          , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*30*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "high_grass" , "high_grass" , "grass"      , "grass"        , "grass"      , "grass"        , false     , false         , false         , false         , false     , "grass"        , "grass"      , "bush"       , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "tree"       , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*31*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "high_grass" , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "l_wall_s_w"   , false     , false     , false     , "l_wall_s_e"   , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "tree"       , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*32*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "high_grass" , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*23*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*33*/[false         ,false         ,false     ,"grass"        , "grass"        , "grass"     , "grass"      , "grass"      , "high_grass" , "grass"      , "grass"      , "grass"      , "grass"      , "grass"        , "grass"      , "grass"        , "grass"        , "grass"        , "high_grass"   , "grass"        , "grass"        , "grass"        , "grass"      , "grass"      , "grass"      , "grass"      , "grass"         , "grass"      , "grass"      , "grass"      , "grass"     , "grass"     , "grass"     , "grass"     ,false     ,false         ,false         ],
    /*34*/[false         ,false         ,false         ,false     , false     , false  , false   , false   , false   , false   , false   , false   , false   , false     , false   , false     , false     , false     , false     , false     , false     , false     , false   , false   , false   , false   , false      , false   , false   , false   , false  , false  , false  ,false       ,false         ,false         ,false         ],
    /*35*/[false         ,false         ,false         ,false         , false         , false      , false       , false       , false       , false       , false       , false       , false       , false         , false       , false         , false         , false         , false         , false         , false         , false         , false       , false       , false       , false       , false          , false       , false       , false       , false      , false      , false      ,false       ,false         ,false         ,false         ],
    /*36*/[false         ,false         ,false         ,false         , false         , false      , false       , false       , false       , false       , false       , false       , false       , false         , false       , false         , false         , false         , false         , false         , false         , false         , false       , false       , false       , false       , false          , false       , false       , false       , false      , false      , false      ,false       ,false         ,false         ,false         ]
    
    

];
var selested_num=null;
world_land_url = {
    main:"../img/danya/",
    asphalt:"asphalt/asphalt.jpg",
    grass:"grass/grass.png",
    high_grass:"grass/high_grass.png",
    bush:"bush/bush.jpg",
    luja:"luja/luja1.png",
    tree:"tree/tree_main.jpg",
    hlam:"hlam/hlam.png",
    h_hlam:"hlam/home_hlam.png",
    wall_s_w:"home/usual/wall/2/wall_s_w.png",
    wall_s_e:"home/usual/wall/2/wall_s_e.png",
    wall_n_w:"home/usual/wall/2/wall_n_w.png",
    wall_n_e:"home/usual/wall/2/wall_n_e.png",
    d_wall_s:"home/usual/door/1/d_wall_s.png",
    d_wall_n:"home/usual/door/1/d_wall_n.png",
    d_wall_e:"home/usual/door/1/d_wall_e.png",
    d_wall_w:"home/usual/door/1/d_wall_w.png",
    wall_s:"home/usual/wall/1/wall_s.png",
    wall_n:"home/usual/wall/1/wall_n.png",
    wall_e:"home/usual/wall/1/wall_e.png",
    wall_w:"home/usual/wall/1/wall_w.png",
    road_s_n:"road/strite/road_s_n.png",
    road_e_w:"road/strite/road_e_w.png",
    road_n_e:"road/povorot/road_n_e.png",
    road_n_w:"road/povorot/road_n_w.png",
    road_s_e:"road/povorot/road_s_e.png",
    road_s_w:"road/povorot/road_s_w.png",
    road_n_e_s:"road/3/road_n_e_s.png",
    road_n_w_s:"road/3/road_n_w_s.png",
    road_w_n_e:"road/3/road_w_n_e.png",
    road_w_s_e:"road/3/road_w_s_e.png",
    l_wall_s:"water/lake/1/lake_wall_s.png", //l_  - вода
    l_wall_n:"water/lake/1/lake_wall_n.png",
    l_wall_e:"water/lake/1/lake_wall_e.png",
    l_wall_w:"water/lake/1/lake_wall_w.png",
    l_wall_s_w:"water/lake/2/lake_wall_s_w.png",
    l_wall_s_e:"water/lake/2/lake_wall_s_e.png",
    l_wall_n_w:"water/lake/2/lake_wall_n_w.png",
    l_wall_n_e:"water/lake/2/lake_wall_n_e.png",
    l_end_s_w:"water/lake/end/w_end_s_w.jpg",
    l_end_s_e:"water/lake/end/w_end_s_e.jpg",
    l_end_n_w:"water/lake/end/w_end_n_w.jpg",
    l_end_n_e:"water/lake/end/w_end_n_e.jpg",
    floor:"floor/floor.png",
    d_floor:"floor/d_floor.png",
    lake:"water/lake/4/lake.png",
    none:"null/null.png",
    player:"people/player/player.png",
    seller_h:"people/seller/seller_head.jpg",
    seller_s:"people/seller/seller_speak.jpg",
}

{
    var global_map=world_map
    var global_walk_map=world_walk_map
    var doors=["6x12", "9x12", "9x15", "8x18", "11x19", "15x20", "16x16", "14x16", "13x16", "14x13", "15x12"]
    var home_maps=[home_map_1,home_map_2,home_map_3,home_map_4,home_map_5,home_map_6,home_map_7,home_map_8,home_map_9,home_map_10,home_map_11]
    var home_walk_maps=[home_walk_map_1,home_walk_map_2,home_walk_map_3,home_walk_map_4,home_walk_map_5,home_walk_map_6,home_walk_map_7,home_walk_map_8,home_walk_map_9,home_walk_map_10,home_walk_map_11]
}
//12x5
}
/*functions*/{
{

    document.addEventListener('keydown', function(event) {
        if (event.code == 'Escape') {
            if(setings_main.style.display=="block"){
                home_page.style.display="block"
                setings_main.style.display="none"
            }else{
                home_page.style.display="none"
                setings_main.style.display="block"
            }
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ArrowUp') {
            go_world('n')
        }
    });
    document.addEventListener('keydown', function(event) {
      if (event.code == 'ArrowDown') {
        go_world('s')
      }
    });
    document.addEventListener('keydown', function(event) {
      if (event.code == 'ArrowLeft') {
        go_world('w')
      }
    });
    document.addEventListener('keydown', function(event) {
      if (event.code == 'ArrowRight'/* && (event.ctrlKey || event.metaKey)*/) {
        go_world('e')
      }
    });
    //----------------------------------------------------
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ControlRight') {
          if (check_floor()=="hlam") {
            take_lut()
          }
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
          if (check_floor()=="door") {
              enter_home()
          }
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.code == 'ShiftRight') {
            if (inventory.style.display=="none") {
                home_page.style.display="none";
                inventory.style.display="block";
                adapt_main()
            } else {
                home_page.style.display="block";
                inventory.style.display="none";
            }

        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.code == 'KeyE') {
          if (check_floor()=="seller" && speak_part.style.display=="none") {
            start_dialoge('seller')
          }
        }
    });
} 
function fill_inv() {
    for (let index = 0; index < player.inv.length; index++) {
        var free_plase=null;
            for (let index = 0; index < player.inv.length; index++) {
            if (player.inv[index]==null) {
                free_plase=index
                break;
            }
        
        }var num_of_item=getRandomInt(0, names_of_items.length-1);
            var vsp=true
            while (vsp==true) {
                if (num_of_item==names_of_items.indexOf("end of weapon") || num_of_item==names_of_items.indexOf("end of headwear")||num_of_item==names_of_items.indexOf("end of outerwear")||num_of_item==names_of_items.indexOf("end of underwear")||num_of_item==names_of_items.indexOf("end of boots")||num_of_item==names_of_items.indexOf("end of wearing")) {
                    num_of_item=getRandomInt(0, names_of_items.length-1);
                    continue
                }
                vsp=false;
            }
            player.inv[free_plase]=num_of_item;
            player.str[free_plase]=100;
        
    }
}
/**/   
function adapt_volume(type) {
    if (type=='background') {
        background_volume=volume_of_background_input.value/10
    } else if (type=='onoff') {
        music_onoff=on_of_music_data.checked
        if (music_onoff==true) {
            volume_of_background.style.display="flex"
        } else {
            volume_of_background.style.display="none"
        }
    }
        
    
}
function adapt_grafics(type) {
    if (type=='quality') {
        if (grafic_quality.value==1) {
            world_land_url.main="../img/prototype/"
        } else if(grafic_quality.value==2){
            world_land_url.main="../img/danya/"
        }
        set_world()
    } else {
        
    }
}
function unshifr_koordinats(str) {
    var i=0;
    var x="";
    var y="";
while (str[i]!="x"||str[i]!="х") {
    if (str[i]=="x") {
        break
    }
    x+=str[i]
    i++
}
x-=0;
for (let r = i+1; r < str.length; r++) {
    y+=str[r]
    
}
y-=0;
var koordinats={
    x:x,
    y:y
}
return koordinats
}
function make_all_homes() {
    var home_with_seller="11x19"
    for (let index = 0; index < doors.length; index++) {
        var home_map_loc=home_maps[index]
        var home_walk_map_loc=home_walk_maps[index]
        var x_k=unshifr_koordinats(doors[index]).x
        var y_k=unshifr_koordinats(doors[index]).y
        var w_h=home_size(x_k,y_k)
        /**/
        
        for (let index_1 = 0; index_1 < (w_h.width*4)+6; index_1++) {
            home_map_loc[index_1]=[]
            home_walk_map_loc[index_1]=[]
            for (let index_2 = 0; index_2 < (w_h.height*4)+6; index_2++) {
                home_map_loc[index_1][index_2]="lake"
                home_walk_map_loc[index_1][index_2]=false
            }
        }
        /**/
        for (let index_1 = 3; index_1 < (w_h.width*4)+3; index_1++) {
            for (let index_2 = 3; index_2 < (w_h.height*4)+3; index_2++) {
                if(getRandomInt(0,100)>95){
                    home_map_loc[index_1][index_2]="h_hlam"
                }else{
                    home_map_loc[index_1][index_2]="floor"
                }

                home_walk_map_loc[index_1][index_2]=true
            }
        }
        home_map_loc[3][3]="d_floor"
        if (doors[index]=="11x19") {
            home_map_loc[3][4]="seller_h"
        }

    }
}/**/
function tp(x,y) {
    player.x=x
    player.y=y
    set_world()
}/**/
function home_size(x,y) {
    //предпологается что игрок стоит на ступеньках
    if (x==undefined||y==undefined) {
        var x=player.x
        var y=player.y
    }
    
    var door_direction=global_map[x][y][global_map[x][y].length-1]
    var start_x
    var start_y
    var end_x
    var end_y
    var x_pl=0
    var y_pl=0
    /*верхний левый угол n_w*/{
        if (door_direction=="e") {
            if (global_map[x][y+1]=="wall_w") {
                y_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    x_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x][y+1]=="wall_n_w"){
                start_x=x+x_pl
                start_y=y+y_pl
            }else if (global_map[x][y+1]=="wall_s_w") {
                y_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    x_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            }
        } else if (door_direction=="w") {
            if (global_map[x][y-1]=="wall_e") {
                y_pl=-1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_e") {
                    x_pl--//- вверх + вниз
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_e") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    y_pl--//- влево + вправо
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x][y-1]=="wall_n_e"){        
                x_pl=0;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    y_pl--//- влево + вправо
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                }
                
            }
            }else if (global_map[x][y-1]=="wall_s_e") {
                y_pl=-1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_e") {
                    x_pl--//- вверх + вниз
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_e") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    y_pl--//- влево + вправо
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            }
        } else if (door_direction=="n") {
            if (global_map[x+1][y]=="wall_n") {
                x_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    y_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x+1][y]=="wall_n_w"){
                start_x=x+x_pl
                start_y=y+y_pl
            }else if (global_map[x+1][y]=="wall_n_e") {
                x_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    y_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            }
        } else if (door_direction=="s") {
            if (global_map[x-1][y]=="wall_s") {
                x_pl=-1;
                while (global_map[x+x_pl][y+y_pl]!="wall_s_w") {
                    y_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    x_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x-1][y]=="wall_s_w"){
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    x_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            }else if (global_map[x-1][y]=="wall_s_e") {
                x_pl=-1;
                while (global_map[x+x_pl][y+y_pl]!="wall_s_w") {
                    y_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_n_w") {
                    x_pl--
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_w") {
                        start_x=x+x_pl
                        start_y=y+y_pl
                    }
                    
                }
            }
        }
    }
    /*нижний правый угол s_e*/{
        if (door_direction=="e") {
            if (global_map[x][y+1]=="wall_w") {
                y_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_e") {
                    y_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x][y+1]=="wall_n_w"){
                y_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_e") {
                    y_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            }else if (global_map[x][y+1]=="wall_s_w") {
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            }
        } else if (door_direction=="w") {
            if (global_map[x][y-1]=="wall_e") {
                y_pl=-1;
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x][y-1]=="wall_n_e"){
                y_pl=-1;
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            }else if (global_map[x][y-1]=="wall_s_e") {
                end_x=x
                end_y=y+1
            }
        } else if (door_direction=="s") {
            if (global_map[x+1][y]=="wall_s") {
                x_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    y_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
                
            } else if(global_map[x+1][y]=="wall_s_w"){
                x_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    y_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
                
            }else if (global_map[x+1][y]=="wall_s_e") {
                end_x=x+1
                end_y=y
            }
        } else if (door_direction=="n") {
            if (global_map[x+1][y]=="wall_n") {
                x_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_e") {
                    y_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            } else if(global_map[x+1][y]=="wall_n_w"){
                x_pl=1;
                while (global_map[x+x_pl][y+y_pl]!="wall_n_e") {
                    y_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_n_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            }else if (global_map[x+1][y]=="wall_n_e") {
                while (global_map[x+x_pl][y+y_pl]!="wall_s_e") {
                    x_pl++
                    if (global_map[x+x_pl][y+y_pl]=="wall_s_e") {
                        end_x=x+x_pl
                        end_y=y+y_pl
                    }
                    
                }
            }
        }
    }
    

/*начало 17х16
конец 18х17
размер 4
*/
var size={
    height:(end_x-start_x)+ 1,
    width:(end_y-start_y)+ 1
}
return size
}   /**/
function unwear(type) {
    switch (type) {
        case "headwear":
            var free_plase=null;
            for (let index = 0; index < player.inv.length; index++) {
                if (player.inv[index]==null) {
                    free_plase=index
                    break;
                }
                
            }
            if (free_plase!=null) {
                player.inv[free_plase]=player.headwear.num;
                player.str[free_plase]=player.headwear.strenth;
                player.headwear.num=null;
                player.headwear.strenth=null;
                adapt_main()
            }else{
                alert("inventory is full")
            }
        break;
        case "outerwear":
            var free_plase=null;
            for (let index = 0; index < player.inv.length; index++) {
                if (player.inv[index]==null) {
                    free_plase=index
                    break;
                }
                
            }
            if (free_plase!=null) {
                player.inv[free_plase]=player.outerwear.num;
                player.str[free_plase]=player.outerwear.strenth;
                player.outerwear.num=null;
                player.outerwear.strenth=null;
                adapt_main()
            }else{
                alert("inventory is full")
            }
        break;
        case "underwear":
            var free_plase=null;
            for (let index = 0; index < player.inv.length; index++) {
                if (player.inv[index]==null) {
                    free_plase=index
                    break;
                }
                
            }
            if (free_plase!=null) {
                player.inv[free_plase]=player.underwear.num;
                player.str[free_plase]=player.underwear.strenth;
                player.underwear.num=null;
                player.underwear.strenth=null;
                adapt_main()
            }else{
                alert("inventory is full")
            }
        break;
        case "boots":
            var free_plase=null;
            for (let index = 0; index < player.inv.length; index++) {
                if (player.inv[index]==null) {
                    free_plase=index
                    break;
                }
                
            }
            if (free_plase!=null) {
                player.inv[free_plase]=player.boots.num;
                player.str[free_plase]=player.boots.strenth;
                player.boots.num=null;
                player.boots.strenth=null;
                adapt_main()
            }else{
                alert("inventory is full")
            }
        break;
        case "weapon":
            var free_plase=null;
            for (let index = 0; index < player.inv.length; index++) {
                if (player.inv[index]==null) {
                    free_plase=index
                    break;
                }
                
            }
            if (free_plase!=null) {
                player.inv[free_plase]=player.weapon.num;
                player.str[free_plase]=player.weapon.strenth;
                player.weapon.num=null;
                player.weapon.strenth=null;
                adapt_main()
            }else{
                alert("inventory is full")
            }
        break;
    
        default:
            alert("Error")
            break;
    }
}  /**/
function use_inv_function() {
    var pl=document.querySelector("td#inv_"+selested_num);
    pl.style.boxShadow="inset 0 0 0px white"
    pl.style.backgroundColor="white"
    use_button.classList.remove("use_button_active")
    use_button.classList.add("use_button_deactive")
    if (player.inv[selested_num-1]<names_of_items.indexOf("end of weapon")) {
        console.log("weapon used")
        player.weapon.num=player.inv[selested_num-1];
        player.weapon.strenth=player.str[selested_num-1];
        weapon_img.src=src_of_items[player.weapon.num];
    } else if(player.inv[selested_num-1]<names_of_items.indexOf("end of wearing")&&player.inv[selested_num-1]>names_of_items.indexOf("end of weapon")){
        console.log("wearing used")
        if (player.inv[selested_num-1]<names_of_items.indexOf("end of headwear")) {
            player.headwear.num=player.inv[selested_num-1];
            player.headwear.strenth=player.str[selested_num-1];
            headwear_img.src=src_of_items[player.headwear.num];
        } else if(player.inv[selested_num-1]<names_of_items.indexOf("end of outerwear")){
            player.outerwear.num=player.inv[selested_num-1];
            player.outerwear.strenth=player.str[selested_num-1];
            outerwear_img.src=src_of_items[player.outerwear.num];
        } else if(player.inv[selested_num-1]<names_of_items.indexOf("end of underwear")){
            player.underwear.num=player.inv[selested_num-1];
            player.underwear.strenth=player.str[selested_num-1];
            underwear_img.src=src_of_items[player.underwear.num];
        } else {
            player.boots.num=player.inv[selested_num-1];
            player.boots.strenth=player.str[selested_num-1];
            boots_img.src=src_of_items[player.boots.num];
        }
    }
    //console.log(selested_num-1)
    //console.log(src_of_items[player.inv[selested_num-1]])
    

    player.inv[selested_num-1]=null
    player.str[selested_num-1]=null
    selested_num=null
    adapt_main()
}/**/
function adapt(inventory_arr,strength_arr,headwear,outerwear,underwear,boots,hp,name,lvl,person,weapon) {
    //inv
    for (let index = 0; index < inventory_arr.length; index++) {

        if (inventory_arr[index]==null) {
            document.querySelector(`td#inv_${index+1}`).innerHTML=`<img src="../img/prototype/null/null.png" alt="" class="inv_td">`
        } else {
            var src=src_of_items[inventory_arr[index]]
            var place=document.querySelector(`td#inv_${index+1}`);
            place.innerHTML=`<img src="${src}" alt="" class="inv_td">`
            
        }
    }
    //strength
    for (let index = 0; index < strength_arr.length; index++) {
        if (strength_arr[index]==null || inventory_arr[index]>names_of_items.indexOf("end of weapon")||inventory_arr[index]==null) {
            var place=document.querySelector(`div#item_helth_${index+1}`)
            place.parentNode.style.display="none"
            continue
        } else {
            var place=document.querySelector(`div#item_helth_${index+1}`)
            place.parentNode.style.display="block"
            if (strength_arr[index]>100) {
                strength_arr[index]=100
            }
            place.style.width=strength_arr[index]+"%"
        }
        
        
    }
    //other
    {
    //hp
    hp_number_main.innerHTML=hp;
    helgth_main.childNodes[1].style.width=hp+"%"
    //name
    player_name_main.innerHTML=name
    var width = document.querySelector('#player_name_main').offsetWidth
    width+=105;
    rename_button.style.left=width+"px"
    //lvl
    lvl_main.innerHTML=lvl
    
    //headwear
    if (headwear.num!=null) {
        headwear_img.src=src_of_items[headwear.num];
        headwear_strength.childNodes[1].style.height=headwear.strenth+"%"
        headwear_strength.style.display="block"
    } else {
        headwear_img.src="../img/prototype/inv_items/null_headwear.jpg";
        headwear_strength.style.display="none"
    }
    
    //outerwear
    if (outerwear.num!=null) {
        outerwear_img.src=src_of_items[outerwear.num];
        outerwear_strength.childNodes[1].style.height=outerwear.strenth+"%"
        outerwear_strength.style.display="block"
    } else {
        outerwear_img.src="../img/prototype/inv_items/null_jaket.jpg";
        outerwear_strength.style.display="none"
    }
    //underwear
    if (underwear.num!=null) {
        underwear_img.src=src_of_items[underwear.num];
        underwear_strength.childNodes[1].style.height=underwear.strenth+"%"
        underwear_strength.style.display="block"
    } else {
        underwear_img.src="../img/prototype/inv_items/null_trousers.jpg";
        underwear_strength.style.display="none"
    }
    //boots
    if (boots.num!=null) {
        boots_img.src=src_of_items[boots.num];
        boots_strength.childNodes[1].style.height=boots.strenth+"%"
        boots_strength.style.display="block"
    } else {
        boots_img.src="../img/prototype/inv_items/null_boots.jpg";
        boots_strength.style.display="none"
    }
    }
    //person
    if (player.weapon.num!=null) {
        atk_num.innerHTML=person.atk+atk_of_items[player.weapon.num];
        
    } else {
        atk_num.innerHTML=person.atk;
    }
    {
        {
        if (player.headwear.num==null) {
            var headwear=0
        }else{
            var headwear=def_of_items[player.headwear.num]
        }
        if (player.outerwear.num==null) {
            var outerwear=0
        }else{
            var outerwear=def_of_items[player.outerwear.num]
        }
        if (player.underwear.num==null) {
            var underwear=0
        }else{
            var underwear=def_of_items[player.underwear.num]
        }
        if (player.boots.num==null) {
            var boots=0
        }else{
            var boots=def_of_items[player.boots.num]
        }
        }
        def_num.innerHTML=headwear+outerwear+underwear+boots
    }
    holod_num.innerHTML=person.eat;
    water_num.innerHTML=person.wat;
    //weapon
    if (weapon.num!=null) {
        weapon_img.src=src_of_items[weapon.num];
        weapon_strenth.childNodes[1].style.height=weapon.strenth+"%"
        weapon_strenth.style.display="block"
    } else {
        weapon_img.src="../img/prototype/inv_items/null_weapon.jpg";
        weapon_strenth.style.display="none"
    }

}/**/
function adapt_main() {
    adapt(player.inv,player.str,player.headwear,player.outerwear,player.underwear,player.boots,player.hp,player.name,player.lvl,player,player.weapon);
}/**/
function check_floor() {
    take_lut_button.style.display="none"
    enter_button.style.display="none"
    talk_button.style.display="none"
    if (global_map[player.x][player.y]=="hlam"||global_map[player.x][player.y]=="h_hlam") {
        take_lut_button.style.display="block"
        return "hlam"
    } else if(global_map[player.x][player.y][0]=="d" && global_map[player.x][player.y][1]=="_"){
        enter_button.style.display="block"
        return "door"

    } else if(global_map[player.x][player.y].includes("seller")){
        talk_button.style.display="block"
        return "seller"

    }
}/**/
function for_proress(num) {
    num-=load_progress.value;
    for (let index = 0; index <= num*10; index++) {
        setTimeout(f,10*index)
        function f() {
            load_progress.value+=0.1
        }
    }
}/**/
function set_cookie_main() {
    all_fucking_code.style.display="none"
    load_window.style.display="flex"
    //player x,y
    {
    localStorage.setItem('player_x', player.x);
    load_progress.value=50
    localStorage.setItem('player_y', player.y);
    load_progress.value=100
    }
    all_fucking_code.style.display="block"
    load_window.style.display="none"
}/**/
function get_cookie_main() {
    all_fucking_code.style.display="none"
    load_window.style.display="flex"
    //player x,y
    {
    player.x=localStorage.getItem('player_x')-0;
    load_progress.value=50
    player.y=localStorage.getItem('player_y')-0;
    load_progress.value=100
    }
    all_fucking_code.style.display="block"
    load_window.style.display="none"
    set_world()
}/**/
function otladka() {
    if (player.x<3||player.x>33) {
        player.x=3
        set_world()
    }
    if (player.y<3||player.y>33) {
        player.y=3
        set_world()
    }
}
function onload_func(){
    if (document.documentElement.clientWidth<1500) {
        all_fucking_code.style.display="none"
        not_valid_width.style.display="block"
    } else {
        get_cookie_main()
        make_all_homes()
        give_items_seller()
        give_zadania_to_seller()
        set_world()
    }
    

}/**/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}/**/
function give_items_seller() {
    seller_data.item_1=getRandomInt(0, names_of_items.length-1);
    var vsp=true
    while (vsp==true) {
        if (seller_data.item_1==names_of_items.indexOf("end of weapon") || seller_data.item_1==names_of_items.indexOf("end of headwear")||seller_data.item_1==names_of_items.indexOf("end of outerwear")||seller_data.item_1==names_of_items.indexOf("end of underwear")||seller_data.item_1==names_of_items.indexOf("end of boots")||seller_data.item_1==names_of_items.indexOf("end of wearing")) {
            seller_data.item_1=getRandomInt(0, names_of_items.length-1);
            continue
        }
        vsp=false;
    }
    seller_data.item_2=getRandomInt(0, names_of_items.length-1);
    var vsp=true
    while (vsp==true) {
        if (seller_data.item_2==names_of_items.indexOf("end of weapon") || seller_data.item_2==names_of_items.indexOf("end of headwear")||seller_data.item_2==names_of_items.indexOf("end of outerwear")||seller_data.item_2==names_of_items.indexOf("end of underwear")||seller_data.item_2==names_of_items.indexOf("end of boots")||seller_data.item_2==names_of_items.indexOf("end of wearing")) {
            seller_data.item_2=getRandomInt(0, names_of_items.length-1);
            continue
        }
        vsp=false;
    }
    seller_data.item_3=getRandomInt(0, names_of_items.length-1);
    var vsp=true
    while (vsp==true) {
        if (seller_data.item_3==names_of_items.indexOf("end of weapon") || seller_data.item_3==names_of_items.indexOf("end of headwear")||seller_data.item_3==names_of_items.indexOf("end of outerwear")||seller_data.item_3==names_of_items.indexOf("end of underwear")||seller_data.item_3==names_of_items.indexOf("end of boots")||seller_data.item_3==names_of_items.indexOf("end of wearing")) {
            seller_data.item_3=getRandomInt(0, names_of_items.length-1);
            continue
        }
        vsp=false;
    }
    seller_data.item_4=getRandomInt(0, names_of_items.length-1);
    var vsp=true
    while (vsp==true) {
        if (seller_data.item_4==names_of_items.indexOf("end of weapon") || seller_data.item_4==names_of_items.indexOf("end of headwear")||seller_data.item_4==names_of_items.indexOf("end of outerwear")||seller_data.item_4==names_of_items.indexOf("end of underwear")||seller_data.item_4==names_of_items.indexOf("end of boots")||seller_data.item_4==names_of_items.indexOf("end of wearing")) {
            seller_data.item_4=getRandomInt(0, names_of_items.length-1);
            continue
        }
        vsp=false;
    }
}
function take_lut() {

    var free_plase=null;
    for (let index = 0; index < player.inv.length; index++) {
        if (player.inv[index]==null) {
            free_plase=index
            break;
        }
        
    }
    if (free_plase!=null) {
        switch (global_map[player.x][player.y]) {
            case "hlam":
                global_map[player.x][player.y]="asphalt"
            break;
            case "h_hlam":
                global_map[player.x][player.y]="floor"
            break;
        
            default:
                break;
        }
        var num_of_item=getRandomInt(0, names_of_items.length-1);
        var vsp=true
        while (vsp==true) {
            if (num_of_item==names_of_items.indexOf("end of weapon") || num_of_item==names_of_items.indexOf("end of headwear")||num_of_item==names_of_items.indexOf("end of outerwear")||num_of_item==names_of_items.indexOf("end of underwear")||num_of_item==names_of_items.indexOf("end of boots")||num_of_item==names_of_items.indexOf("end of wearing")) {
                num_of_item=getRandomInt(0, names_of_items.length-1);
                continue
            }
            vsp=false;
        }
        player.inv[free_plase]=num_of_item;
        player.str[free_plase]=100;
    }else{
        alert("inventory is full")
    }
    set_world()
    visible_zadania()
}/**/
function set_world() {
    //console.log("Начинаю далать мир:"+world_map.length+"x"+world_map[0].length);
    var z_x=(player.x)-4
    var z_y=(player.y)-4
    for (let x = (player.x)-3; x < (player.x)+4; x++) {
        for (let y = (player.y)-3; y < (player.y)+4; y++) {
            var text1=global_map[x][y];
            var src_text="";
            switch (text1) {
                case "asphalt":
                    src_text=world_land_url.asphalt;
                    break;
                case "grass":
                    src_text=world_land_url.grass;
                    break;
                case "high_grass":
                    src_text=world_land_url.high_grass;
                    break;
                case "bush":
                    src_text=world_land_url.bush;
                    break;
                case "luja":
                    src_text=world_land_url.luja;
                    break;
                case "tree":
                    src_text=world_land_url.tree;
                    break;
                case "hlam":
                    src_text=world_land_url.hlam;
                    break;
                case "h_hlam":
                    src_text=world_land_url.h_hlam;
                    break;
                case "wall_s_w":
                    src_text=world_land_url.wall_s_w;
                    break;
                case "wall_n_w":
                    src_text=world_land_url.wall_n_w;
                    break;
                case "wall_n_e":
                    src_text=world_land_url.wall_n_e;
                    break;
                case "wall_s_e":
                    src_text=world_land_url.wall_s_e;
                    break;
                case "wall_s":
                    src_text=world_land_url.wall_s;
                    break;
                case "wall_n":
                    src_text=world_land_url.wall_n;
                    break;
                case "wall_e":
                    src_text=world_land_url.wall_e;
                    break;
                case "wall_w":
                    src_text=world_land_url.wall_w;
                    break;
                case "d_wall_s":
                    src_text=world_land_url.d_wall_s;
                    break;
                case "d_wall_n":
                    src_text=world_land_url.d_wall_n;
                    break;
                case "d_wall_e":
                    src_text=world_land_url.d_wall_e;
                    break;
                case "d_wall_w":
                    src_text=world_land_url.d_wall_w;
                    break;
                case "road_s_n":
                    src_text=world_land_url.road_s_n;
                    break;
                case "road_e_w":
                    src_text=world_land_url.road_e_w;
                    break;
                case "road_n_e":
                    src_text=world_land_url.road_n_e;
                    break;
                case "road_n_w":
                    src_text=world_land_url.road_n_w;
                    break;
                case "road_s_e":
                    src_text=world_land_url.road_s_e;
                    break;
                case "road_s_w":
                    src_text=world_land_url.road_s_w;
                    break;
                case "road_n_e_s":
                    src_text=world_land_url.road_n_e_s;
                    break;
                case "road_n_w_s":
                    src_text=world_land_url.road_n_w_s;
                    break;
                case "road_w_n_e":
                    src_text=world_land_url.road_w_n_e;
                    break;
                case "road_w_s_e":
                    src_text=world_land_url.road_w_s_e;
                    break;
                case "l_wall_n":
                    src_text=world_land_url.l_wall_n;
                    break;
                case "l_wall_s":
                    src_text=world_land_url.l_wall_s;
                    break;
                case "l_wall_e":
                    src_text=world_land_url.l_wall_e;
                    break;
                case "l_wall_w":
                    src_text=world_land_url.l_wall_w;
                    break;
                case "l_wall_s_n":
                    src_text=world_land_url.l_wall_s_n;
                    break;
                case "l_wall_e_w":
                    src_text=world_land_url.l_wall_e_w;
                    break;
                case "l_wall_n_e":
                    src_text=world_land_url.l_wall_n_e;
                    break;
                case "l_wall_n_w":
                    src_text=world_land_url.l_wall_n_w;
                    break;
                case "l_wall_s_e":
                    src_text=world_land_url.l_wall_s_e;
                    break;
                case "l_wall_s_w":
                    src_text=world_land_url.l_wall_s_w;
                    break;
                case "l_end_n_e":
                    src_text=world_land_url.l_end_n_e;
                    break;
                case "l_end_n_w":
                    src_text=world_land_url.l_end_n_w;
                    break;
                case "l_end_s_e":
                    src_text=world_land_url.l_end_s_e;
                    break;
                case "l_end_s_w":
                    src_text=world_land_url.l_end_s_w;
                    break;
                case "lake":
                    src_text=world_land_url.lake;
                    break;
                case "floor":
                    src_text=world_land_url.floor;
                    break;
                case "d_floor":
                    src_text=world_land_url.d_floor;
                    break;
                case "seller_h":
                    src_text=world_land_url.seller_h;
                    break;                             
                default:
                    console.log("Ошибка при инициализации обьекта "+(x+1)+"x"+(y+1)+"\n"+global_map[x][y])
                    break;
            }
            src_text=world_land_url.main+src_text;
            var id_text="x"+((x+0)-z_x)+"_y"+((y+0)-z_y)  //x1_y1
            //console.log(id_text)
            var plase=document.getElementById(id_text);
            plase.innerHTML='<img src="'+src_text+'" style="width: 54px;height: 54px;">'
            
            
        }
        
    }
    //console.log(`position\nx:${player.x}\ny:${player.y}`)
    position.innerHTML=player.x+"x"+player.y+"  m:"+player.money
    check_floor()
}/**/
function go_world(way) {
    switch (way) {
        case "n":
            go_n()
            break;
        case "s":
            go_s()
            break;
        case "w":
            go_w()
            break;
        case "e":
            go_e()
            break;
                            
        default:
            break;
    }
    visible_zadania()
}
function go_n() {
    var x_p=player.x+1;
    var y_p=player.y+1;

    if (global_walk_map[player.x-1][player.y]==false) {
        /*    //удаление картинки из начального места
        {
            console.log(`p_x${x_p}_y${y_p}`)
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`)
            url_p.innerHTML=`<img src="../img/prototype/null/null.png"   style="width: 54px;height: 54px;">`
        }
        //Изменение кооринат
        {

            var x_p=player.x;
        }
        //добавление картинки в новое место
        {
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`);
            url_p.innerHTML=`<img src="../img/prototype/player/player.png"   style="width: 54px;height: 54px;">`
        }

        player.x--;*/
        
    } else {
       player.x-- 
       set_world()
    }
    
}/**/
function go_s() {
    var x_p=player.x+1;
    var y_p=player.y+1;

    if (global_walk_map[player.x+1][player.y]==false) {
        /*console.log("Перемещение по экрану")
            //удаление картинки из начального места
        {
            console.log(`p_x${x_p}_y${y_p}`)
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`)
            url_p.innerHTML=`<img src="../img/prototype/null/null.png"   style="width: 54px;height: 54px;">`
        }
        //Изменение кооринат
        {

            var x_p=player.x+2;
        }
        //добавление картинки в новое место
        {
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`);
            url_p.innerHTML=`<img src="../img/prototype/player/player.png"   style="width: 54px;height: 54px;">`
        }

        player.x++;*/
        
    } else {
       player.x++ 
       set_world()
    }
    
}/**/
function go_w() {
    var x_p=player.x+1;
    var y_p=player.y+1;

    if (global_walk_map[player.x][player.y-1]==false) {
        /*    //удаление картинки из начального места
        {
            console.log(`p_x${x_p}_y${y_p}`)
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`)
            url_p.innerHTML=`<img src="../img/prototype/null/null.png"   style="width: 54px;height: 54px;">`
        }
        //Изменение кооринат
        {

            var y_p=player.y;
        }
        //добавление картинки в новое место
        {
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`);
            url_p.innerHTML=`<img src="../img/prototype/player/player.png"   style="width: 54px;height: 54px;">`
        }

        player.y--;*/
        
    } else {
       player.y-- 
       set_world()
    }
    
}/**/
function go_e() {
    var x_p=player.x+1;
    var y_p=player.y+1;

    if (global_walk_map[player.x][player.y+1]==false) {
        /*    //удаление картинки из начального места
        {
            console.log(`p_x${x_p}_y${y_p}`)
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`)
            url_p.innerHTML=`<img src="../img/prototype/null/null.png"   style="width: 54px;height: 54px;">`
        }
        //Изменение кооринат
        {

            var y_p=player.y+2;
        }
        //добавление картинки в новое место
        {
            var url_p=document.getElementById(`p_x${x_p}_y${y_p}`);
            url_p.innerHTML=`<img src="../img/prototype/player/player.png"   style="width: 54px;height: 54px;">`
        }

        player.y++;*/
        
    } else {
       player.y++ 
       set_world()
    }
    
}/**/
function enter_home() {
    if (global_map[player.x][player.y]=="d_wall_s"||global_map[player.x][player.y]=="d_wall_n"||global_map[player.x][player.y]=="d_wall_e"||global_map[player.x][player.y]=="d_wall_w") {
        player.reserv_x=player.x
        player.reserv_y=player.y
        player.x=3;
        player.y=3;
        global_map=home_maps[doors.indexOf(player.reserv_x+"x"+player.reserv_y)]
        global_walk_map=home_walk_maps[doors.indexOf(player.reserv_x+"x"+player.reserv_y)]

    } else if(global_map[player.x][player.y]=="d_floor"){
        player.x=player.reserv_x
        player.y=player.reserv_y
        global_map=world_map
        global_walk_map=world_walk_map
    }
    
    set_world()
}/**/
function info_part_animation(todo,text) {
    info_part.innerHTML=text
    if (todo=="close") {
        for (let index = 106; index <= 411; index++) {
            var valr=setTimeout(dr,0.25*(index-106),index)
            function dr(num) {
                info_part.style.top=num+"px"
            }
        }
    } else {
        for (let index = 411; index >= 106; index--) {
            var valr=setTimeout(dr,0.25*(411-(index)),index)
            function dr(num) {
                info_part.style.top=num+"px"
            }
        }
    }
}
function start_dialoge(name) {
    switch (name) {
        case "seller":
            if (music_onoff==true) {
                speack_audio = document.createElement("audio");
                talk_back.appendChild(speack_audio)
                speack_audio.setAttribute('loop',true)
                speack_audio.volume=background_volume
                speack_audio.src = "../music/people/seller/background/seller_back_music.mp3";
                speack_audio.play();
            }
            img_part.src=world_land_url.main+world_land_url.seller_s
            text_part.innerHTML="<p></p>"
            /*text_part.innerHTML=`
                <p>* Антибиотик - ATK 0 DEF 0</p>
                <p>* Нож - ATK 5 DEF 0</p>
                <p>* ПМ - ATK 7.5 DEF 0</p>
                <p>* АК-47 - ATK 15 DEF 0</p>
                `*/
            control_part.innerHTML=`
                <p onclick="buy_button()">Купить</p>
                <p onclick="sell_button()">Продать</p>
                <p onclick="speak_button()">Говорить</p>
                <p onclick="end_button()">Выйти</p>
                `
                speak_part.style.display="block"
                
            break;
    
        default:
            break;
    }sell_money()
}
function plavn_text(text,plase,speed){

    plase.style.zIndex=99999999999999999;
    //$ перенос строки
    for (let index = 0; index < text.length; index++) {
        setTimeout(some,index*speed)
        function some(){
            if(text[index]!="$"){
                plase.innerHTML+=text[index]
            }else{
                plase.innerHTML+="<br>"
            }

        
        }


    }
}
function buy_1(cost,num,p) {

    if (player.money>=num) {
        var free_plase=null;
        for (let index = 0; index < player.inv.length; index++) {
            if (player.inv[index]==null) {
                free_plase=index
                break;
            }

        }
        if (free_plase!=null) {
            player.money-=cost;
            player.inv[free_plase]=num
            text_part.childNodes[(2*p)-1].innerHTML="* Выкуплено, спасибо за покупку"
            text_part.childNodes[(2*p)-1].onclick=""
        }else{
            alert("Inventory is full")
        }
    }else{
        alert("you have no money")
    }
    sell_money()
}
function adapt_arr(arr) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]==null) {
            for (let index_2 = index; index_2 < arr.length; index_2++) {
                if(arr[index_2]!=null){
                    arr[index]=arr[index_2]
                    arr[index_2]=null
                    break
                }
                
            }
        }
        
    }
    return arr
}
function make_sell_text() {
    /*`
        <div style="display:flex;justify-content: space-around;">
            <p onclick="sell_1(${1+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[1+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[1+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[1+((num_of_page-1)*4)-1]]}</p>
            <p onclick="sell_1(${2+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[2+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[1+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[1+((num_of_page-1)*4)-1]]}</p>
        </div>
        <div style="display:flex;justify-content: space-around;">
            <p onclick="sell_1(${3+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[3+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[1+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[1+((num_of_page-1)*4)-1]]}</p>
            <p onclick="sell_1(${4+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[4+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[1+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[1+((num_of_page-1)*4)-1]]}</p>
        </div>
        <div style="display:flex;justify-content: space-around;">
            <p onclick="sell_1(${5+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[5+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[1+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[1+((num_of_page-1)*4)-1]]}</p>
            <p onclick="sell_1(${6+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[6+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[1+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[1+((num_of_page-1)*4)-1]]}</p>
        </div>
        <div style="display:flex;justify-content: space-around;">
            <p onclick="back_page_sell()">< предыдущая страница</p>
            <p id=pages_counter">${num_of_page}/${pages}</p>
            <p onclick="next_page_sell()"> следующая страница ></p>
        </div>
            `*/
            var text_main=``
        for (let index = 0; index < 6; index+=2) {
            var text_1=""
            var text_2=""
            if (player.inv[index]!=null) {
                text_1=`<p class="unselectable" onclick="sell_1(${(index+1)+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[(index+1)+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[(index+1)+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[(index+1)+((num_of_page-1)*4)-1]]}</p>`
            } else {
                text_1=`<p class="unselectable" ></p>`
            }
            if (player.inv[index+1]!=null) {
                text_2=`<p class="unselectable" onclick="sell_1(${(index+2)+((num_of_page-1)*4)-1})">* ${names_of_items[player.inv[(index+2)+((num_of_page-1)*4)-1]]} - ATK ${atk_of_items[player.inv[(index+2)+((num_of_page-1)*4)-1]]} DEF ${def_of_items[player.inv[(index+2)+((num_of_page-1)*4)-1]]}</p>`
            } else {
                text_2=`<p class="unselectable" ></p>`
            }
            text_main+=`
            <div style="display:flex;justify-content: space-around;">
                ${text_1}
                ${text_2}
            </div>
            `
        }
        text_main+=`
        <div style="display:flex;justify-content: space-around;">
            <p class="unselectable" onclick="back_page_sell()">< предыдущая страница</p>
            <p class="unselectable" id=pages_counter">${num_of_page}/${pages}</p>
            <p class="unselectable" onclick="next_page_sell()"> следующая страница ></p>
        </div>
            `
        return text_main
        /*
        1  2  3  4  5  6
        7  8  9  10 11 12
        13 14 15 16 17 18
        19 20 21
        
        */ 
}
function sell_1(num) {
console.log("selling "+num)
player.money+=cost_of_items[player.inv[num]]
player.inv[num]=null
player.str[num]=null
adapt_arr(player.inv)
pages=0
for (let index = 0; index < player.inv.length; index++) {
    if (player.inv[index]!=null) {
        pages++
    }
    
}
pages=parseInt(pages/6)+1
text_part.innerHTML=make_sell_text()
sell_money()
}
function took_somesing_of_you(name) {
    var sucses=false
    for (let index = 0; index < player.inv.length; index++) {
        if(player.inv[index]==name){
            player.inv[index]=null
            player.str[index]=null
            sucses=true
            adapt_arr(player.inv)
        }
        
    }
return sucses 
    

}
{   var kazino_number=0;
    function kazino_func_speak() {
        if (player.money>=1000) {
            kazino_number=getRandomInt(1,11)
            console.log(kazino_number)
            var str1="* Я думаю о числе между 1 и 10. Что это за число?$ Приз: 2000UAH"
            document.querySelector("#text_part").innerHTML="<p></p>"
            plavn_text(str1,document.querySelector("#text_part>p"),50)
            var x=setTimeout(make_input,(str1.length*50)+100)
            function make_input() {
                document.querySelector("#text_part").innerHTML+="<input id='kazino_input' placeholder='Ваш ответ...'></input>"
            }
            var y=setTimeout(make_button,(str1.length*50)+200)
            function make_button() {
                document.querySelector("#text_part").innerHTML+="<p onclick='check_kazino()' class='yellow_hover'>Ответить</p>"
            }
        } else {
            var str1="* Дружище, да ты бедняк!"
            document.querySelector("#text_part").innerHTML="<p></p>"
            plavn_text(str1,document.querySelector("#text_part>p"),50)
            var x=setTimeout(make_input,("* Дружище, да ты бедняк!".length*50)+100)
            function make_input() {
                document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"
            }
        }
        
    }
    function check_kazino() {
        if(kazino_input.value-0==kazino_number){
            console.log("yay")
            player.money+=2000;
            document.querySelector("#text_part").innerHTML="<p></p>"
            plavn_text("* Черт ты победил, вот твои деньги!",document.querySelector("#text_part>p"),50)
            var x=setTimeout(make_input,("* Черт ты победил, вот твои деньги!".length*50)+100)
            function make_input() {
                document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"
            }
            money.innerHTML=`${player.money}UAH`
        }else{
            console.log("oof")
            player.money-=1000;
            document.querySelector("#text_part").innerHTML="<p></p>"
            plavn_text("* Похоже ты проиграл! А значит ты мне должен 1000UAH!",document.querySelector("#text_part>p"),50)
            var x=setTimeout(make_input,("* Похоже ты проиграл! А значит ты мне должен 1000UAH!".length*50)+100)
            function make_input() {
                document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"
            }
            money.innerHTML=`${player.money}UAH`
        }
    }
    function sell_money() {
        var fillig=0;
        for (let index = 0; index < player.inv.length; index++) {
            if (player.inv[index]!=null) {
                fillig++
            }
            
        }
        money.innerHTML=`${player.money}UAH`
        inv_filling.innerHTML=`${fillig}/${player.inv.length}`
    }
    var num_of_page=1;
    var pages=0;
    function speak_button() {
        
        text_part.innerHTML=`
        <b>* О чем ты хотел поговорить?</b>
        <p onclick="kazino_func_speak()" class='yellow_hover'>"Казино"</p>
        <p onclick='make_zdania_1()' class='yellow_hover'>Задания</p>
        `
        
    }
    function end_button() {
        talk_back.innerHTML=""
        document.querySelector("#text_part").innerHTML="<p></p>"
        plavn_text("* пока",document.querySelector("#text_part>p"),50)
        speak_part.style.display="none"
        set_world()
        visible_zadania()
    }
    function sell_button() {
        /**/
        document.querySelector("#text_part").innerHTML="<p></p>"
        var empty_inv=false
        for (let index = 0; index < player.inv.length; index++) {
            if(player.inv[index]!=null){
                empty_inv=true 
                break
            }
    
        }
        
        if (empty_inv==true) {
            for (let index = 0; index < player.inv.length; index++) {
                if (player.inv[index]!=null) {
                    pages++
                }
                
            }
            adapt_arr(player.inv)
            pages=parseInt(pages/6)+1
            var num_of_page=1
            
            text_part.innerHTML=make_sell_text()
        } else {
            plavn_text("* Ты думаешь что я буду покупать воздух?",document.querySelector("#text_part>p"),50)
        }
        
        
     
    }
    function back_page_sell() {
        
        if(num_of_page>1){
            
            num_of_page--
            text_part.innerHTML=make_sell_text()
      

        }
    }
    function next_page_sell() {
        
        if(num_of_page<pages){
            
            num_of_page++
            text_part.innerHTML=make_sell_text()
  
        }
    }
    function buy_button() {
        text_part.innerHTML="<p></p>"
            text_part.innerHTML=`
                <p onclick="buy_1(${cost_of_items[seller_data.item_1]},${seller_data.item_1},1)" onmouseover="info_part_animation(open,'${names_of_items[seller_data.item_1]}<br><br>ATK 0 DEF 3')" onmouseout="info_part_animation('close','')">* ${names_of_items[seller_data.item_1]} - ATK 0 DEF 3</p>
                <p onclick="buy_1(${cost_of_items[seller_data.item_2]},${seller_data.item_2},2)" onmouseover="info_part_animation(open,'${names_of_items[seller_data.item_2]}<br><br>ATK 0 DEF 3')" onmouseout="info_part_animation('close','')">* ${names_of_items[seller_data.item_2]} - ATK 5 DEF 0</p>
                <p onclick="buy_1(${cost_of_items[seller_data.item_3]},${seller_data.item_3},3)" onmouseover="info_part_animation(open,'${names_of_items[seller_data.item_3]}<br><br>ATK 0 DEF 3')" onmouseout="info_part_animation('close','')">* ${names_of_items[seller_data.item_3]} - ATK 7.5 DEF 0</p>
                <p onclick="buy_1(${cost_of_items[seller_data.item_4]},${seller_data.item_4},4)" onmouseover="info_part_animation(open,'${names_of_items[seller_data.item_4]}<br><br>ATK 0 DEF 3')" onmouseout="info_part_animation('close','')">* ${names_of_items[seller_data.item_4]} - ATK 15 DEF 0</p>
                `
    }
/*Задания*/{
    function give_zadania_to_seller() {
        seller_data.zadanie_1.type="bring"
        seller_data.zadanie_2.type="bring"
        seller_data.zadanie_3.type="bring"
        var num_of_item=getRandomInt(0, names_of_items.length-1);
        var vsp=true
        while (vsp==true) {
            if (num_of_item==names_of_items.indexOf("end of weapon") || num_of_item==names_of_items.indexOf("end of headwear")||num_of_item==names_of_items.indexOf("end of outerwear")||num_of_item==names_of_items.indexOf("end of underwear")||num_of_item==names_of_items.indexOf("end of boots")||num_of_item==names_of_items.indexOf("end of wearing")) {
                num_of_item=getRandomInt(0, names_of_items.length-1);
                continue
            }
            vsp=false;
        }
        seller_data.zadanie_1.name=names_of_items[num_of_item]
        var num_of_item=getRandomInt(0, names_of_items.length-1);
        var vsp=true
        while (vsp==true) {
            if (num_of_item==names_of_items.indexOf("end of weapon") || num_of_item==names_of_items.indexOf("end of headwear")||num_of_item==names_of_items.indexOf("end of outerwear")||num_of_item==names_of_items.indexOf("end of underwear")||num_of_item==names_of_items.indexOf("end of boots")||num_of_item==names_of_items.indexOf("end of wearing")) {
                num_of_item=getRandomInt(0, names_of_items.length-1);
                continue
            }
            vsp=false;
        }
        seller_data.zadanie_2.name=names_of_items[num_of_item]
        var num_of_item=getRandomInt(0, names_of_items.length-1);
        var vsp=true
        while (vsp==true) {
            if (num_of_item==names_of_items.indexOf("end of weapon") || num_of_item==names_of_items.indexOf("end of headwear")||num_of_item==names_of_items.indexOf("end of outerwear")||num_of_item==names_of_items.indexOf("end of underwear")||num_of_item==names_of_items.indexOf("end of boots")||num_of_item==names_of_items.indexOf("end of wearing")) {
                num_of_item=getRandomInt(0, names_of_items.length-1);
                continue
            }
            vsp=false;
        }
        seller_data.zadanie_3.name=names_of_items[num_of_item]
        var vsp=true
        var num_of_item=getRandomInt(0, names_of_items.length-1);
    }
    function visible_zadania() {
        for (let index = 0; index < player.zadania.type.length; index++) {
            if (player.zadania.type[index]!=null) {
            var pla=document.getElementById("name_zadanie_"+(index+1))
            pla.innerHTML=player.zadania.name_z[index]
            if (check_zadania()[index]==true) {
                pla.classList=[]
                pla.classList.add("name_zadanie--complete");
            } else {
                pla.classList=[]
                pla.classList.add("name_zadanie--uncomplete");
            }
            var pla=document.querySelector(`div#discripton_zadanie_`+(index+1))
            pla.innerHTML=player.zadania.discription[index]
            var pla=document.querySelector(`div#revard_zadanie_`+(index+1))
            pla.innerHTML=player.zadania.revard[index]
            var pla=document.querySelector(`div#progres_zadanie_`+(index+1))
            if (check_zadania()[index]==true) {
                pla.innerHTML="1/1"
            } else {
                pla.innerHTML="0/1"
            }
            var pla=document.querySelector(`div#zadanie_border_`+(index+1))
            if (check_zadania()[index]==true) {
                pla.classList=[]
                pla.classList.add("zad_border--complete");
            } else {
                pla.classList=[]
                pla.classList.add("zad_border--uncomplete");
            }
            pla.style.display="block"
            }else{
                var pla=document.querySelector(`div#zadanie_border_`+(index+1))
                pla.style.display="none"

            }
        }
    }
    function end_zadanie(num) {
        if (player.zadania.type[num]=="bring") {
            for (let index = 0; index < player.inv.length; index++) {
                if(player.inv[index]==names_of_items.indexOf(player.zadania.name[num])){
                    player.inv[index]=null;
                    player.str[index]=null;
                    give_revard(player.zadania.revard[num])
                }
                
            }                                                        
            player.zadania.name_z[num]=null                                                        
            player.zadania.discription[num]=null                                                        
            player.zadania.name[num]=null                                                        
            player.zadania.amount[num]=null                                                        
            player.zadania.type[num]=null                                                        
            player.zadania.revard[num]=null          
            //
            var str1="* Ты неплохо справился!"
            document.querySelector("#text_part").innerHTML="<p></p>"
            plavn_text(str1,document.querySelector("#text_part>p"),50)
            var x=setTimeout(make_input,(str1.length*50)+100)
            function make_input() {
                document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"              

            }                                
        }
    }
    function make_compl_zadanie() {
        var compl_zadania=check_zadania()

        if (compl_zadania.indexOf(true)==(-1)) {
            var str1="* Ты вроде ещё ничего не выполнил!"
            document.querySelector("#text_part").innerHTML="<p></p>"
            plavn_text(str1,document.querySelector("#text_part>p"),50)
            var x=setTimeout(make_input,(str1.length*50)+100)
            function make_input() {
                document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"
            }
        } else {
            var text_2=``
            for (let i_1 = 0; i_1 < compl_zadania.length; i_1++) {
                if (compl_zadania[i_1]==true) {
                    if(player.zadania.type[i_1]=="bring"){
                        text_2+=`
                        <p onclick="end_zadanie(${i_1})" class='yellow_hover'>${player.zadania.name_z[i_1]}</p>
                        `
                    }
                }
            }
            text_part.innerHTML=text_2
        }
    }
    function give_revard(revard_str) {
        var amount=""
        var thing=""
        /*indefening*/{
        var i=0
        for (i; i < revard_str.length; i++) {
            if (revard_str[i]!="|") {
                amount+=revard_str[i]
            }else{
                break
            }
            
        }
        i++
        amount-=0
        for (i; i < revard_str.length; i++) {
            thing+=revard_str[i]
            
            
        }
        }
        /*giving */{
            if (thing=="UAH") {
                player.money+=amount
                money.innerHTML=`${player.money}UAH`
            } else {
                
            }
        }


    }
    function make_zdania_1() {
        text_part.innerHTML="<p onclick='give_zadania_1()' id='id1' class='yellow_hover'></p>"
        var place_1=document.querySelector("#text_part>p#id1")
        plavn_text("* Получить",place_1,50)
        setTimeout(g,("* Получить".length*50)+50)
        function g() {
            text_part.innerHTML+="<p onclick='make_compl_zadanie()' id='id2' class='yellow_hover'></p>"
        var place_2=document.querySelector("#text_part>p#id2")
        plavn_text("* Сдать",place_2,50)
        }
        
            
    }
    function give_zadania_1() {
        text_part.innerHTML=""
        var thing=seller_data.zadanie_1.name
        text_part.innerHTML+=`<p onclick='give_zadanie("${seller_data.zadanie_1.type}","${seller_data.zadanie_1.name}","Bring ${seller_data.zadanie_1.name} to seller","2000|UAH",1)' id='zadanie_1'class='yellow_hover'></p>`
        var place_1=document.querySelector("#text_part>p#zadanie_1")
        plavn_text("* Принести "+thing,place_1,50)
        setTimeout(x_1,(("* Принести "+thing).length*50)+100)
        function x_1() {
            var thing=seller_data.zadanie_2.name
            text_part.innerHTML+=`<p onclick='give_zadanie("${seller_data.zadanie_2.type}","${seller_data.zadanie_2.name}","Bring ${seller_data.zadanie_2.name} to seller","2000|UAH",1)' id='zadanie_2'class='yellow_hover'></p>`
            var place_2=document.querySelector("#text_part>p#zadanie_2")
            plavn_text("* Принести "+thing,place_2,50)

            setTimeout(x_2,(("* Принести "+thing).length*50)+100)
            function x_2() {
                var thing=seller_data.zadanie_3.name
                text_part.innerHTML+=`<p onclick='give_zadanie("${seller_data.zadanie_3.type}","${seller_data.zadanie_3.name}","Bring ${seller_data.zadanie_3.name} to seller","2000|UAH",1)' id='zadanie_3'class='yellow_hover'></p>`
                var place_3=document.querySelector("#text_part>p#zadanie_3")
                plavn_text("* Принести "+thing,place_3,50)
            }
        }
        
        
        
    }
    function give_zadanie(type,name,discription,revard,amount) {
        if (type="bring") {
            free_plase_zadanie=null;
            for (let index = 0; index < player.zadania.name.length; index++) {
                if (player.zadania.name[index]==null) {
                    free_plase_zadanie=index
                    break
                }
            }
            if (free_plase_zadanie==null) {
                var str1="* Я вижу у тебя и так дел по горло"
                document.querySelector("#text_part").innerHTML="<p></p>"
                plavn_text(str1,document.querySelector("#text_part>p"),50)
                var x=setTimeout(make_input,("* Я вижу у тебя и так дел по горло".length*50)+100)
                function make_input() {
                    document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"
                }
            }else{
                var number_of_zadanie=getRandomInt(0,zadania_name.length)
                player.zadania.name_z[free_plase_zadanie]="В поисках "+name;
                player.zadania.name[free_plase_zadanie]=name;
                player.zadania.discription[free_plase_zadanie]=discription
                player.zadania.revard[free_plase_zadanie]=revard
                player.zadania.amount[free_plase_zadanie]=amount
                player.zadania.type[free_plase_zadanie]=type
                //
                var str1="* Ну, удачи тебе с этим!"
                document.querySelector("#text_part").innerHTML="<p></p>"
                plavn_text(str1,document.querySelector("#text_part>p"),50)
                var x=setTimeout(make_input,(str1.length*50)+100)
                function make_input() {
                    document.querySelector("#text_part").innerHTML+="<p onclick='speak_button()' class='yellow_hover'>* Вернутся</p>"
                }



            }
        }
    }
    function check_zadania() {
        var done_zadania=[]
        for (let index = 0; index < player.zadania.type.length; index++) {
            if(player.zadania.type[index]=="bring"){
                for (let index_2 = 0; index_2 < player.inv.length; index_2++) {
                    if(player.inv[index_2]==names_of_items.indexOf(player.zadania.name[index])){
                        console.log(`"${player.zadania.name_z[index]}" is done`)
                        done_zadania[index]=true
                        break
                    }else{
                        done_zadania[index]=false
                    }
                    
                }
            }
            
        }
        return done_zadania
    }
}
}

    function animated_hed_seller() {
        /**
         * 1. 78
         * 2. 81
         * 3. 90
         */
        while (2<3) {
            if (head.style.top==81) {
                for (let index = 81; index <= 90; index++) {
                    
                    
                }
            }
        }
    }
}
