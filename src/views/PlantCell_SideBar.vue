<template>
  <div class="animallcell_parent">
    <div class="sidebar_component">
      <div>
        <button class="nav_button">
          <lottie-interactive
            style="cursor: pointer;"
            path="hamburger_menu.json"
            @click="toggle_SideBar"
            interaction="switch"
            speed="4"
          />
        </button>
      </div>
      <div class="sidebar_parent" v-if="toggle">
        <div class="sidebar_container">
          <div class="animalcell_content">
            // Plant Cell
            <div class="animal_slots">
              <div class="title-container">
                <p
                  class="title"
                  style="color: '#ffffff; font-family: Bebas; font-size: 45px; margin-bottom: 10px; letter-spacing: 4px;"
                >
                  Plant Cell
                </p>
              </div>
              <div class="definition">
                <p>
                  Plant cells are eukaryotic cells with a true nucleus along
                  with specialized structures called organelles that carry out
                  certain specific functions to sustain itself.
                </p>
                <router-link to="/">
                  <button class="animal_button" style="margin-top: 12px">
                    Explore Animal Cell
                  </button>
                </router-link>
                <router-link to="/mitosis">
                  <button
                    class="animal_button"
                    style="margin-top: 12px; background: #9932CC;"
                  >
                    Explore Mitosis
                  </button>
                </router-link>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
            // Cell Wall
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.cell_wall_tab = !this.cell_wall_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Cell wall
                </p>
                <Dropdown_down v-if="this.cell_wall_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.cell_wall_tab">
                <p>
                  The cell wall is the tough, flexible, and rigid outermost
                  layer that protects and provides structural support to the
                  cell.
                </p>
                <p>
                  The cell wall is composed of cellulose, long fibers of
                  carbohydrates, glycoproteins, lignin, pectin, and
                  hemicellulose.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Middle Lamella
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  The middle lamella is also the outermost layer that acts as an
                  interface between other neighboring cells and glues them
                  together. It is composed of pectin, pectose, and Calcium
                  pectate.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  2. Primary Cell Wall
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  The primary cell wall is the first-formed cell wall that is
                  permeable and very thin, mainly composed of cellulose,
                  allowing the wall to stretch for growth purposes.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  3. Secondary Wall
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  The secondary wall is the thickest layer that provides the
                  rectangular or square shape of the cell. It is composed of
                  cellulose and lignin that provides additional rigidity and
                  waterproofing.
                </p>
                <p class="title" style="font-size: 16px;">
                  Other substances impregnated in the cell walls:
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Lignin
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Lignin are complex sugar derivatives that are important in the
                  formation of plant cell walls, especially in wood and bark, as
                  they lend rigidity and does not rot easily.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  2. Cutin
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Cutin is an oily/fatty substance which makes the cell wall
                  impermeable to water and highly consists of polymerized esters
                  of fatty acids.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  3. Suberin
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Suberin is a waxy substance that forms gas and watertight
                  layers rendering the cells impermeability to water.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  4. Pectin
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Pectin is a jelly-like substance containing acidic
                  sugar-containing backbones that cements the cell wall
                  together.
                </p>
                <button class="slot_button" @click="move_model">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
            // Cell Membrane
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.cell_membrane_tab = !this.cell_membrane_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Cell membrane
                </p>
                <Dropdown_down
                  v-if="this.cell_membrane_tab"
                  style="width: 25px;"
                />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.cell_membrane_tab">
                <p>
                  A semi-permeable thin layer of protein and fat that regulates
                  the entry and exit of specific substances within the cell.
                </p>
                <p class="title" style="font-size: 16px;">
                  Specialization of cell membrane of plant cells:
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Plasmodesmata
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Plasmodesmata (singular, plasmodesma) is a specialized
                  junction where a hole is punched in the cell wall to allow
                  direct cytoplasmic exchange between two plant cells.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
            // Nucleus
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.nucleus_tab = !this.nucleus_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Nucleus
                </p>
                <Dropdown_down v-if="this.nucleus_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.nucleus_tab">
                <p>
                  The nucleus is a spherical membrane-bound structure that is
                  present only in eukaryotic cells. The vital function of a
                  nucleus is to store DNA or hereditary information required for
                  cell division, metabolism, and growth.
                </p>
                <p class="title" style="font-size: 16px;">
                  Sub-parts of the Nucleus:
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Nuclear membrane
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Nuclear membrane is a double-layered membrane that separates
                  the contents of the nucleus from the rest of the cell.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  2. Nucleoplasm
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Nucleoplasm, also called karyoplasm, is a type of protoplasm
                  found within the nuclear membrane that is composed of thick
                  fluid and constitutes chromatin fibers made up of DNA.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  3. Nucleolus
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Nucleolus manufactures cell’s protein-producing structures and
                  is a site for ribosome assembly.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  4. Chromatin network
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-bottom: -15px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Chromatin is the network of the cell’s nucleus which contains
                  all the DNA of the nucleus of the cell
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  5. Nucleopore
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Nuclear membrane is perforated with hole called nucleopore
                  that allows proteins and nucleic acids to pass through.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Cytoplasm
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.cytoplasm_tab = !this.cytoplasm_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Cytoplasm
                </p>
                <Dropdown_down v-if="this.cytoplasm_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.cytoplasm_tab">
                <p>
                  The cytoplasm is a jelly-like fluid enclosed within the cell
                  membrane that comprises water, enzymes, and salts. All the
                  other cell organelles are suspended within it.
                </p>
                <p class="title" style="font-size: 16px;">
                  Elements of the Cytoplasm:
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Cytosol
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Cytosol is a semi-transparent liquid in which organelles,
                  proteins, and other cell structures float.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  2. Organelles
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Organelles are little metabolic machinery that carry out the
                  functions essential to the survival of the cell.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  3. Non-living inclusions
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                >
                  Non-living inclusions are non-living substances that are
                  products of metabolic processes that serves as chief reserved
                  activities.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Subcellular Parts
            <p class="title" style="color: '#ffffff;">SUBCELLULAR PARTS:</p>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
            // Plastids
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.mitochondria_tab = !this.mitochondria_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Plastids
                </p>
                <Dropdown_down
                  v-if="this.mitochondria_tab"
                  style="width: 25px;"
                />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.mitochondria_tab">
                <p>
                  Plastids are double-membrane globular bodies that are
                  responsible for manufacturing and storing of food. These are
                  capable of self-replication.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Chloroplastid
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Chloroplastids are the essential organelles of plants. It is
                  the site for chlorophyll production
                </p>
                <div style="margin-left: 20px;">
                  <p
                    class="title"
                    style="font-size: 16px; margin-bottom:-5px; margin-left: 15px"
                  >
                    Grana
                  </p>
                  <p
                    class="definition"
                    style="font-size: 14px; margin-bottom: -20px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                  >
                    Grana are stacked thylakoids that are green in color.
                  </p>
                  <p
                    class="title"
                    style="font-size: 16px; margin-bottom:-5px; margin-left: 15px"
                  >
                    Stroma
                  </p>
                  <p
                    class="definition"
                    style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                  >
                    Stroma is the colorless fluid that surround the grana.
                  </p>
                </div>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  2. Chromoplastid
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Chromoplastids are multi-colored plastids and stores
                  carotenoid pigments in flowers, fruits, and certain leaves.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  3. Leucoplastid
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Leucoplastids are colorless plastids that serves as storage
                  center for reserved food.
                </p>
                <div style="margin-left: 20px;">
                  <p
                    class="title"
                    style="font-size: 16px; margin-bottom:-5px; margin-left: 15px"
                  >
                    Amyloplast
                  </p>
                  <p
                    class="definition"
                    style="font-size: 14px; margin-bottom: -20px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                  >
                    Amyloplast is a type of leucoplast that forms and stores
                    starch.
                  </p>
                  <p
                    class="title"
                    style="font-size: 16px; margin-bottom:-5px; margin-left: 15px"
                  >
                    Elaioplast
                  </p>
                  <p
                    class="definition"
                    style="font-size: 14px; margin-left: 15px;  overflow: hidden; text-overflow: ellipsis; "
                  >
                    Elaioplast is a type of leucoplast that stores fats or
                    lipids
                  </p>
                </div>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
            // Mitochondria
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.mitochondria_tab = !this.mitochondria_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Mitochondria
                </p>
                <Dropdown_down
                  v-if="this.mitochondria_tab"
                  style="width: 25px;"
                />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.mitochondria_tab">
                <p>
                  Mitochondria are spherical sausage-shaped bodies, often
                  referred to as the “powerhouse of the cell”, as they release
                  energy required to power all cellular functions. These
                  organelles are the site for respiration.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Cristae
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Cristae is the inner membrane of the mitochondria that
                  resembles a plate-like structure.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
            // Ribosomes
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.ribosome_tab = !this.ribosome_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Ribosomes
                </p>
                <Dropdown_down v-if="this.ribosome_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.ribosome_tab">
                <p>
                  Ribosomes are microscopic ribonucleoprotein particle that are
                  the site for protein synthesis in cells.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  1. Rough endoplasmic reticulum (Rough ER)
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Rough ER, also called as Granular ER, is studded with
                  ribosomes and a site for protein synthesis.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  2. Smooth endoplasmic reticulum (Smooth ER)
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Smooth ER, also called as Agranular ER, does not have any
                  ribosomes attached to its surface. It is the site for lipid
                  synthesis.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px;  margin-bottom: -2px"
            />
            // Endoplasmic reticulum
            <div class="animal_slots">
              <div class="title-container" @click="this.er_tab = !this.er_tab">
                <p class="title" style="color: '#ffffff;">
                  Endoplasmic Reticulum
                </p>
                <Dropdown_down v-if="this.er_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.er_tab">
                <p>
                  Endoplasmic reticulum is a network of tubules and flattened
                  sacs that plays a major role in the production, processing,
                  and transport of proteins and lipids.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Golgi Apparatus
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.golgi_tab = !this.golgi_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Golgi Apparatus
                </p>
                <Dropdown_down v-if="this.er_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.golgi_tab">
                <p>
                  Golgi apparatus, also called as golgi bodies or dictyosomes,
                  is a stock of plate-like membrane containing sacs. Its main
                  function is the packaging and secretion of the newly
                  synthesized proteins from the Rough ER.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Microbodies
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.microbodies_tab = !this.microbodies_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Microbodies
                </p>
                <Dropdown_down
                  v-if="this.microbodies_tab"
                  style="width: 25px;"
                />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.microbodies_tab">
                <p>
                  Microbodies are spherical, membrane-bound organelles that
                  contains oxidative enzymes. They are same in size with
                  mitochondria.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  Peroxisomes
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Peroxisomes are spherical membrane sacs that degrades fatty
                  acids. It also uses molecular oxygen to detoxify a number of
                  harmful substances including alcohol and formaldehyde.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  Lysosomes
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Lysosomes are spherical organelles that act as a scavenger of
                  the cell as it digests old cell parts and invading pathogens.
                  Lysosomes are also involved in programmed cell death, also
                  known as apoptosis.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  Glyoxysomes
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Glyoxysomes are specialized peroxisome found in plants,
                  particularly in germinating seeds, and filamentous fungi.
                </p>
                <p class="title" style="font-size: 16px; margin-bottom:-5px">
                  Spherosomes
                </p>
                <p
                  class="definition"
                  style="font-size: 14px; margin-left: 15px;"
                >
                  Spherosomes are small spherical bodies that are responsible
                  for storage and synthesis of lipid
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Microfilaments
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.microfilaments_tab = !this.microfilaments_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Microfilaments
                </p>
                <Dropdown_down
                  v-if="this.microfilaments_tab"
                  style="width: 25px;"
                />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.microfilaments_tab">
                <p>
                  Microfilaments are elaborate network of protein structure that
                  extends throughout the cytoplasm. It acts as the cell’s bones
                  and muscles that provides support and shape. It is also
                  responsible for movement of organelles.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Vacuole
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.vacuole_tab = !this.vacuole_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Vacuole
                </p>
                <Dropdown_down v-if="this.vacuole_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.vacuole_tab">
                <p>
                  Vacuole is a cytoplasmic sap-filled bubble for cell
                  enlargement and storage center. The vacuoles in animal cells
                  are small and distributed throughout the cytoplasm while the
                  vacuoles in plant cells are very large and take up most of the
                  interior space of the cell.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />

            // Tonoplast
            <div class="animal_slots">
              <div
                class="title-container"
                @click="this.tonoplast_tab = !this.tonoplast_tab"
              >
                <p class="title" style="color: '#ffffff;">
                  Tonoplast
                </p>
                <Dropdown_down v-if="this.tonoplast_tab" style="width: 25px;" />
                <Dropdown_up v-else style="width: 25px;" />
              </div>
              <div class="definition" v-show="this.tonoplast_tab">
                <p>
                  Tonoplast is the membrane surrounding the vacuole.
                </p>
                <button class="slot_button" @click="move_camera">
                  Move Camera
                </button>
              </div>
            </div>
            <hr
              style="width: 100%; border: 1px solid #535353; border-radius: 15px; margin-bottom: -2px"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="routing">
      Please Wait
    </div>
    <Renderer
      ref="renderer"
      antialias
      :orbit-ctrl="{
        enableDamping: true,
        enablePan: false,
        dampingFactor: 0.05,
        maxDistance: 15,
        minDistance: 10,
        minPan: 3,
      }"
      resize="window"
      :pointer="{ intersectRecursive: true }"
    >
      <Camera ref="camera" :position="{ x: 10, y: 1, z: 2 }" />
      <Scene>
        <SpotLight
          color="#ffffff"
          :position="{ y: 250, z: 0 }"
          :cast-shadow="true"
          :shadow-map-size="{ width: 1024, height: 1024 }"
        />
        <SpotLight
          color="#ffffff"
          :position="{ y: -150, z: 0 }"
          :cast-shadow="true"
          :shadow-map-size="{ width: 1024, height: 1024 }"
        />
        <GltfModel
          :position="{ x: 0, y: 1, z: 2 }"
          src="PlantCell_Downsized.glb"
          @progress="onProgress"
          @load="onReady"
        />
      </Scene>
      <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="0.5" :radius="1" />
      </EffectComposer>
    </Renderer>
  </div>
</template>

<script>
import gsap from "gsap";
import { LottieInteractive } from "lottie-interactive";
import Dropdown_down from "../components/Dropdown_down.vue";
import Dropdown_up from "../components/Dropdown_up.vue";

import {
  EffectComposer,
  SpotLight,
  Camera,
  GltfModel,
  Renderer,
  Scene,
  UnrealBloomPass,
  RenderPass,
} from "troisjs";
export default {
  data() {
    return {
      loaded: true,
      toggle: false,
      animalCellToggle: true,
      animal_cell_tab: false,
      cell_wall_tab: false,
      cell_membrane_tab: false,
      nucleus_tab: false,
      cytoplasm_tab: false,
      mitochondria_tab: false,
      ribosome_tab: false,
      er_tab: false,
      golgi_tab: false,
      microtubules_tab: false,
      microbodies_tab: false,
      microfilaments_tab: false,
      vacuole_tab: false,
      tonoplast_tab: false,
      showclick: true,
    };
  },
  components: {
    Dropdown_down,
    Dropdown_up,
    LottieInteractive,
    EffectComposer,
    SpotLight,
    Camera,
    GltfModel,
    Renderer,
    Scene,
    UnrealBloomPass,
    RenderPass,
  },
  mounted() {
    console.log("Hello");
    console.log(this.$refs.camera.camera.position.x);
  },
  methods: {
    move_camera() {
      console.log(this.$refs.camera.camera.position.z);
      console.log(this.$refs.camera.camera.position.y);
      gsap.to(this.$refs.camera.camera.position, {
        x: 1.5,
        y: -0.3383049367400532,
        z: 12,
        duration: 0.5,
        ease: "expo.out",
      });
    },
    move_model() {
      console.log(this.$refs.model_animal);
      // this.$refs.model_animal.o3d.visibe = !this.$refs.model.o3d.visible;
      console.log("I have move the model");
      this.$refs.model_animal.o3d.visible = !this.$refs.model_animal.o3d
        .visible;
      console.log(this.$refs.model_animal.o3d.visible);
    },
    onProgress() {
      console.log("Loading Plant Cell");
    },
    onReady() {
      const hello = (this.loaded = !this.loaded);
      console.log("I have loaded" + " " + hello);
    },
    toggle_SideBar() {
      this.toggle = !this.toggle;
      if (this.toggle == true) {
        gsap.to("canvas", { x: "35%", duration: 0.5, ease: "expo.out" });
        gsap.to(".nav_button", {
          left: "38%",
          duration: 0.5,
          ease: "expo.out",
        });
      } else {
        gsap.to("canvas", { x: "0%", duration: 0.5, ease: "expo.out" });
        gsap.to(".nav_button", { left: "3%", duration: 0.5, ease: "expo.out" });
      }
    },
  },
  watch: {
    $route(to, from) {
      this.toggle = false;
      console.log("Route changed from " + from.path + " to " + to.path);
      gsap.to("canvas", { x: "0%", duration: 0.5, ease: "expo.out" });
      gsap.to(".nav_button", { left: "3%", duration: 0.5, ease: "expo.out" });
      // if (to.path == '/plantcell'){
      //   this.animalCellToggle = false
      // } else if (to.path == '/') {
      //   this.animalCellToggle = true
      // }
    },
  },
};
</script>
<style>
.loader_routes {
  z-index: 102;
  background: red;
}
.animal_button {
  padding: 25px;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  background: #e62117;
  cursor: pointer;
  color: #ffffff;
}
.animallcell_parent {
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: #030303;
}
.container_all {
  overflow: hidden;
  margin: 0;
  background: #030303;
}
.sidebar_parent {
  width: 35%;
  height: 100vh;
  position: absolute;
  z-index: 40;
  overflow-x: hidden;
  background-color: #030303;
  margin: 0px;
  top: 0;
  left: 0;
}
.sidebar_container {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sidebar_container > div {
  display: flex;
  justify-content: space-around;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.sidebar_container > div > div > p {
  display: flex;
  justify-content: space-around;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  color: #ffffff;
}
.sidebar_parent a {
  font-weight: bold;
  color: #ffffff;
}
.sidebar_parent a.router-link-exact-active {
  color: #42b983;
}
canvas {
  position: fixed;
  z-index: 0;
  background: #030303;
  inset: 0;
}
.white {
  height: 100vh;
  width: 100vw;
  background: #ffffff;
  z-index: 100;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  top: 0;
}
</style>
