//File name:            Play1
//Author’s name:        Vishal Guleria (300813391), Vinay Bhardwaj (300825097) and Jagpreet Jattana
//Date last Modified    April 8,2016
//Program description   Group Project - Battle Truck
//Revision History      Part 2

/**
 * The Scenes module is a namespace to reference all scene objects
 * 
 * @module scenes
 */

module scenes {
    /**
     * The Play class is where the main action occurs for the game
     * 
     * @class Play
     * @param havePointerLock {boolean}
     */
    export class Play1 extends scenes.Scene {
        private havePointerLock: boolean;
        private element: any;

        private blocker: HTMLElement;
        private instructions: HTMLElement;

        private spotLight: SpotLight;

        private frontMaterial: PhongMaterial;

        private glassTexture: Texture;


        private bodyTexture: Texture;
        private frontTexture: Texture;
        private lLightTexture: Texture;
        private rLightTexture: Texture;
        private breakLightTexture: Texture;
        private frontTextureNormal: Texture;

        private playerGeometry1: CubeGeometry;

        private playersGeometry: SphereGeometry;

        private playerGeometrya: CubeGeometry;
        private playerGeometryb: CubeGeometry;

        private playerGeometryc: CubeGeometry;
        private playerGeometryd: CubeGeometry;
        private playerGeometrye: CubeGeometry;

        private playerMaterial: Physijs.Material;
        private playerMaterial1: Physijs.Material;
        private playerMateriala: Physijs.Material;
        private playerMaterialb: Physijs.Material;
        private playerMaterialc: Physijs.Material;
        private playerMateriald: Physijs.Material;
        private playerMateriale: Physijs.Material;

        private player: Physijs.Mesh;
        private player1: Physijs.Mesh;
        private playera: Physijs.Mesh;
        private playerb: Physijs.Mesh;
        private playerbb: Physijs.Mesh;
        private playerc: Physijs.Mesh;
        private playerd: Physijs.Mesh;
        private playere: Physijs.Mesh;
        private playerf: Physijs.Mesh;

        private sphereGeometry: SphereGeometry;
        private sphereMaterial: Physijs.Material;
        private sphere: Physijs.Mesh;

        private cubeTexture: Texture;
        private cubeTextureNormal: Texture;

        private groundGeometry: CubeGeometry;
        private groundPhysicsMaterial: Physijs.Material;
        private groundMaterial: PhongMaterial;
        private ground: Physijs.Mesh;
        private groundTexture: Texture;
        private groundTextureNormal: Texture;

        private wallPhysicsMaterial: Physijs.Material;
        private wallMaterial: PhongMaterial;
        private wallTexture: Texture;
        private wallTextureNormal: Texture;

        private boundary1Geometry: CubeGeometry;
        private boundary1: Physijs.Mesh;

        private boundary2Geometry: CubeGeometry;
        private boundary2: Physijs.Mesh;

        private boundary3Geometry: CubeGeometry;
        private boundary3: Physijs.Mesh;

        private boundary4Geometry: CubeGeometry;
        private boundary4: Physijs.Mesh;

        private boundary5Geometry: CubeGeometry;
        private boundary5: Physijs.Mesh;

        private iw1Geometry: CubeGeometry;
        private iw1: Physijs.Mesh;

        private iw2Geometry: CubeGeometry;
        private iw2: Physijs.Mesh;

        private iw3Geometry: CubeGeometry;
        private iw3: Physijs.Mesh;

        private iw4Geometry: CubeGeometry;
        private iw4: Physijs.Mesh;

        private iw5Geometry: CubeGeometry;
        private iw5: Physijs.Mesh;

        private iw6Geometry: CubeGeometry;
        private iw6: Physijs.Mesh;

        private iw7Geometry: CubeGeometry;
        private iw7: Physijs.Mesh;

        private iw8Geometry: CubeGeometry;
        private iw8: Physijs.Mesh;

        private iw8aGeometry: CubeGeometry;
        private iw8a: Physijs.Mesh;

        private iw9Geometry: CubeGeometry;
        private iw9: Physijs.Mesh;

        private iw10Geometry: CubeGeometry;
        private iw10: Physijs.Mesh;

        private iw11Geometry: CubeGeometry;
        private iw11: Physijs.Mesh;

        private iw12Geometry: CubeGeometry;
        private iw12: Physijs.Mesh;

        private iw13Geometry: CubeGeometry;
        private iw13: Physijs.Mesh;

        private iw14Geometry: CubeGeometry;
        private iw14: Physijs.Mesh;

        private iw15Geometry: CubeGeometry;
        private iw15: Physijs.Mesh;

        private iw16Geometry: CubeGeometry;
        private iw16: Physijs.Mesh;

        private iw17Geometry: CubeGeometry;
        private iw17: Physijs.Mesh;

        private iw18Geometry: CubeGeometry;
        private iw18: Physijs.Mesh;

        private enemyGeometry: SphereGeometry;
        private enemyMaterial: Physijs.Material;
        private enemy: Physijs.Mesh;

        private keyboardControls: objects.KeyboardControls;
        private mouseControls: objects.MouseControls;
        private isGrounded: boolean;

        private coinGeometry: Geometry;
        private coinMaterial: Physijs.Material;
        private coins: Physijs.ConcaveMesh[];
        private coinCount: number;

        private deathPlaneGeometry: CubeGeometry;
        private deathPlaneMaterial: Physijs.Material;
        private deathPlane: Physijs.Mesh;

        private velocity: Vector3;
        private prevTime: number;
        private clock: Clock;

        private stage: createjs.Stage;
        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;

        /**
         * @constructor
         */
        constructor() {
            super();

            this._initialize();
            this.start();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++

        /**
         * Sets up the initial canvas for the play scene
         * 
         * @method setupCanvas
         * @return void
         */
        private _setupCanvas(): void {
            canvas.setAttribute("width", config.Screen.WIDTH.toString());
            canvas.setAttribute("height", (config.Screen.HEIGHT * 0.1).toString());
            canvas.style.backgroundColor = "#000000";
            canvas.style.opacity = "0.5";
            canvas.style.position = "absolute";
        }

        /**
         * The initialize method sets up key objects to be used in the scene
         * 
         * @method _initialize
         * @returns void
         */
        private _initialize(): void {
            // initialize score and lives values
            scoreValue = 0;
            livesValue = 5;
            console.log("Initialize score and lives values");

            // Create to HTMLElements
            this.blocker = document.getElementById("blocker");
            this.instructions = document.getElementById("instructions");
            this.blocker.style.display = "block";

            // setup canvas for menu scene
            this._setupCanvas();

            this.coinCount = 10;
            this.prevTime = 0;
            this.stage = new createjs.Stage(canvas);
            this.velocity = new Vector3(0, 0, 0);

            // setup a THREE.JS Clock object
            this.clock = new Clock();

            // Instantiate Game Controls
            this.keyboardControls = new objects.KeyboardControls();
            this.mouseControls = new objects.MouseControls();
        }
        /**
         * This method sets up the scoreboard for the scene
         * 
         * @method setupScoreboard
         * @returns void
         */
        private setupScoreboard(): void {
            // Add Lives Label
            this.livesLabel = new createjs.Text(
                "LIVES: " + livesValue,
                "40px Consolas",
                "#ffffff"
            );
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.stage.addChild(this.livesLabel);
            console.log("Added Lives Label to stage");

            // Add Score Label
            this.scoreLabel = new createjs.Text(
                "SCORE: " + scoreValue,
                "40px Consolas",
                "#ffffff"
            );
            this.scoreLabel.x = config.Screen.WIDTH * 0.8;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.stage.addChild(this.scoreLabel);
            console.log("Added Score Label to stage");
        }

        /**
         * Add a spotLight to the scene
         * 
         * @method addSpotLight
         * @return void
         */
        private addSpotLight(): void {
            // Spot Light
            this.spotLight = new SpotLight(0xffffff);
            this.spotLight.position.set(100, 150, -15);
            this.spotLight.castShadow = true;
            this.spotLight.intensity = 2;
            this.spotLight.lookAt(new Vector3(0, 0, 0));
            this.spotLight.shadowCameraNear = 2;
            this.spotLight.shadowCameraFar = 200;
            this.spotLight.shadowCameraLeft = -5;
            this.spotLight.shadowCameraRight = 5;
            this.spotLight.shadowCameraTop = 5;
            this.spotLight.shadowCameraBottom = -5;
            this.spotLight.shadowMapWidth = 2048;
            this.spotLight.shadowMapHeight = 2048;
            this.spotLight.shadowDarkness = 0.5;
            this.spotLight.name = "Spot Light";
            this.spotLight.angle = 2;
            this.add(this.spotLight);
            console.log("Added spotLight to scene");
        }

        /**
         * Add a ground plane to the scene
         * 
         * @method addGround
         * @return void
         */
        private addGround(): void {
            this.groundTexture = new THREE.TextureLoader().load('../../Assets/images/snow.jpg');
            this.groundTexture.wrapS = THREE.RepeatWrapping;
            this.groundTexture.wrapT = THREE.RepeatWrapping;
            this.groundTexture.repeat.set(8, 8);

            this.groundTextureNormal = new THREE.TextureLoader().load('../../Assets/images/snow.jpg');
            this.groundTextureNormal.wrapS = THREE.RepeatWrapping;
            this.groundTextureNormal.wrapT = THREE.RepeatWrapping;
            this.groundTextureNormal.repeat.set(8, 8);

            this.groundMaterial = new PhongMaterial();
            this.groundMaterial.map = this.groundTexture;
            this.groundMaterial.bumpMap = this.groundTextureNormal;
            this.groundMaterial.bumpScale = 0.2;

            this.groundGeometry = new BoxGeometry(100, 1, 100);
            this.groundPhysicsMaterial = Physijs.createMaterial(this.groundMaterial, 0, 0);
            this.ground = new Physijs.ConvexMesh(this.groundGeometry, this.groundPhysicsMaterial, 0);
            this.ground.receiveShadow = true;
            this.ground.name = "Ground";
            this.add(this.ground);
            console.log("Added Ground to scene");
        }



        private addBoundary1(): void {
            this.wallTexture = new THREE.TextureLoader().load('../../Assets/images/GravelCobble.jpg');
            this.wallTexture.wrapS = THREE.RepeatWrapping;
            this.wallTexture.wrapT = THREE.RepeatWrapping;
            this.wallTexture.repeat.set(2, 2);

            this.wallTextureNormal = new THREE.TextureLoader().load('../../Assets/images/GravelCobbleNormal.png');
            this.wallTextureNormal.wrapS = THREE.RepeatWrapping;
            this.wallTextureNormal.wrapT = THREE.RepeatWrapping;
            this.wallTextureNormal.repeat.set(4, 4);

            this.wallMaterial = new PhongMaterial();
            this.wallMaterial.map = this.wallTexture;
            this.wallMaterial.bumpMap = this.wallTextureNormal;
            this.wallMaterial.bumpScale = 0.2;

            this.boundary1Geometry = new BoxGeometry(2, 10, 100);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.boundary1 = new Physijs.ConvexMesh(this.boundary1Geometry, this.wallPhysicsMaterial, 0);
            this.boundary1.receiveShadow = true;
            this.boundary1.name = "Maze";
            this.boundary1.position.set(49, 5, 0);
            this.add(this.boundary1);
            console.log("Added boundary 1");
        }

        private addBoundary2(): void {

            this.boundary2Geometry = new BoxGeometry(2, 10, 96);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.boundary2 = new Physijs.ConvexMesh(this.boundary2Geometry, this.wallPhysicsMaterial, 0);
            this.boundary2.receiveShadow = true;
            this.boundary2.name = "Maze";
            this.boundary2.position.set(0, 5, 49);
            this.boundary2.rotation.set(0, 1.570796, 0);
            this.add(this.boundary2);
            console.log("Added boundary 2");
        }

        private addBoundary3(): void {

            this.boundary3Geometry = new BoxGeometry(2, 10, 96);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.boundary3 = new Physijs.ConvexMesh(this.boundary3Geometry, this.wallPhysicsMaterial, 0);
            this.boundary3.receiveShadow = true;
            this.boundary3.name = "Maze";
            this.boundary3.position.set(0, 5, -49);
            this.boundary3.rotation.set(0, 1.570796, 0);
            this.add(this.boundary3);
            console.log("Added boundary 3");
        }

        private addBoundary4(): void {

            this.boundary4Geometry = new BoxGeometry(2, 10, 30);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.boundary4 = new Physijs.ConvexMesh(this.boundary4Geometry, this.wallPhysicsMaterial, 0);
            this.boundary4.receiveShadow = true;
            this.boundary4.name = "Maze";
            this.boundary4.position.set(-49, 5, -35);
            this.boundary4.rotation.set(0, 0, 0);
            this.add(this.boundary4);
            console.log("Added boundary 4");
        }

        private addBoundary5(): void {

            this.boundary5Geometry = new BoxGeometry(2, 10, 54);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.boundary5 = new Physijs.ConvexMesh(this.boundary5Geometry, this.wallPhysicsMaterial, 0);
            this.boundary5.receiveShadow = true;
            this.boundary5.name = "Maze";
            this.boundary5.position.set(-49, 5, 23);
            this.boundary5.rotation.set(0, 0, 0);
            this.add(this.boundary5);
            console.log("Added boundary 5");
        }

        private addIW1(): void {

            this.iw1Geometry = new BoxGeometry(2, 10, 74);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw1 = new Physijs.ConvexMesh(this.iw1Geometry, this.wallPhysicsMaterial, 0);
            this.iw1.receiveShadow = true;
            this.iw1.name = "Maze";
            this.iw1.position.set(37, 5, -1);
            this.iw1.rotation.set(0, 0, 0);
            this.add(this.iw1);
            console.log("Added Innerwall 1");
        }

        private addIW2(): void {

            this.iw2Geometry = new BoxGeometry(2, 10, 46);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw2 = new Physijs.ConvexMesh(this.iw2Geometry, this.wallPhysicsMaterial, 0);
            this.iw2.receiveShadow = true;
            this.iw2.name = "Maze";
            this.iw2.position.set(13, 5, 15);
            this.iw2.rotation.set(0, 1.570796, 0);
            this.add(this.iw2);
            console.log("Added Innerwall 2");
        }

        private addIW3(): void {

            this.iw3Geometry = new BoxGeometry(2, 10, 32);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw3 = new Physijs.ConvexMesh(this.iw3Geometry, this.wallPhysicsMaterial, 0);
            this.iw3.receiveShadow = true;
            this.iw3.name = "Maze";
            this.iw3.position.set(25, 5, 32);
            this.iw3.rotation.set(0, 0, 0);
            this.add(this.iw3);
            console.log("Added Innerwall 3");
        }

        private addIW4(): void {

            this.iw4Geometry = new BoxGeometry(2, 10, 40);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw4 = new Physijs.ConvexMesh(this.iw4Geometry, this.wallPhysicsMaterial, 0);
            this.iw4.receiveShadow = true;
            this.iw4.name = "Maze";
            this.iw4.position.set(25, 5, -6);
            this.iw4.rotation.set(0, 0, 0);
            this.add(this.iw4);
            console.log("Added Innerwall 4");
        }

        private addIW5(): void {

            this.iw5Geometry = new BoxGeometry(2, 10, 38);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw5 = new Physijs.ConvexMesh(this.iw5Geometry, this.wallPhysicsMaterial, 0);
            this.iw5.receiveShadow = true;
            this.iw5.name = "Maze";
            this.iw5.position.set(-5, 5, 27);
            this.iw5.rotation.set(0, 1.570796, 0);
            this.add(this.iw5);
            console.log("Added Innerwall 5");
        }

        private addIW6(): void {

            this.iw6Geometry = new BoxGeometry(2, 10, 38);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw6 = new Physijs.ConvexMesh(this.iw6Geometry, this.wallPhysicsMaterial, 0);
            this.iw6.receiveShadow = true;
            this.iw6.name = "Maze";
            this.iw6.position.set(-5, 5, 3);
            this.iw6.rotation.set(0, 1.570796, 0);
            this.add(this.iw6);
            console.log("Added Innerwall 6");
        }

        private addIW7(): void {

            this.iw7Geometry = new BoxGeometry(2, 10, 38);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw7 = new Physijs.ConvexMesh(this.iw7Geometry, this.wallPhysicsMaterial, 0);
            this.iw7.receiveShadow = true;
            this.iw7.name = "Maze";
            this.iw7.position.set(7, 5, -37);
            this.iw7.rotation.set(0, 1.570796, 0);
            this.add(this.iw7);
            console.log("Added Innerwall 7");
        }

        private addIW8(): void {

            this.iw8Geometry = new BoxGeometry(2, 10, 22);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw8 = new Physijs.ConvexMesh(this.iw8Geometry, this.wallPhysicsMaterial, 0);
            this.iw8.receiveShadow = true;
            this.iw8.name = "Maze";
            this.iw8.position.set(-37, 5, 18);
            this.iw8.rotation.set(0, 1.570796, 0);
            this.add(this.iw8);
            console.log("Added Innerwall 8");
        }

        private addIW8a(): void {

            this.iw8aGeometry = new BoxGeometry(2, 10, 10);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw8a = new Physijs.ConvexMesh(this.iw8aGeometry, this.wallPhysicsMaterial, 0);
            this.iw8a.receiveShadow = true;
            this.iw8a.name = "Maze";
            this.iw8a.position.set(-43, 5, -21);
            this.iw8a.rotation.set(0, 1.570796, 0);
            this.add(this.iw8a);
            console.log("Added Innerwall 8a");
        }

        private addIW9(): void {

            this.iw9Geometry = new BoxGeometry(2, 10, 10);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw9 = new Physijs.ConvexMesh(this.iw9Geometry, this.wallPhysicsMaterial, 0);
            this.iw9.receiveShadow = true;
            this.iw9.name = "Maze";
            this.iw9.position.set(-43, 5, -3);
            this.iw9.rotation.set(0, 1.570796, 0);
            this.add(this.iw9);
            console.log("Added Innerwall 9");
        }

        private addIW10(): void {

            this.iw10Geometry = new BoxGeometry(2, 10, 40);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw10 = new Physijs.ConvexMesh(this.iw10Geometry, this.wallPhysicsMaterial, 0);
            this.iw10.receiveShadow = true;
            this.iw10.name = "Maze";
            this.iw10.position.set(-37, 5, -14);
            this.iw10.rotation.set(0, 0, 0);
            this.add(this.iw10);
            console.log("Added Innerwall 10");
        }

        private addIW11(): void {

            this.iw11Geometry = new BoxGeometry(2, 10, 70);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw11 = new Physijs.ConvexMesh(this.iw11Geometry, this.wallPhysicsMaterial, 0);
            this.iw11.receiveShadow = true;
            this.iw11.name = "Maze";
            this.iw11.position.set(-25, 5, -3);
            this.iw11.rotation.set(0, 0, 0);
            this.add(this.iw11);
            console.log("Added Innerwall 11");
        }

        private addIW12(): void {

            this.iw12Geometry = new BoxGeometry(2, 10, 36);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw12 = new Physijs.ConvexMesh(this.iw12Geometry, this.wallPhysicsMaterial, 0);
            this.iw12.receiveShadow = true;
            this.iw12.name = "Maze";
            this.iw12.position.set(-13, 5, -30);
            this.iw12.rotation.set(0, 0, 0);
            this.add(this.iw12);
            console.log("Added Innerwall 1");
        }

        private addIW13(): void {

            this.iw13Geometry = new BoxGeometry(2, 10, 28);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw13 = new Physijs.ConvexMesh(this.iw13Geometry, this.wallPhysicsMaterial, 0);
            this.iw13.receiveShadow = true;
            this.iw13.name = "Maze";
            this.iw13.position.set(-1, 5, -12);
            this.iw13.rotation.set(0, 0, 0);
            this.add(this.iw13);
            console.log("Added Innerwall 1");
        }

        private addIW14(): void {

            this.iw14Geometry = new BoxGeometry(2, 10, 28);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw14 = new Physijs.ConvexMesh(this.iw14Geometry, this.wallPhysicsMaterial, 0);
            this.iw14.receiveShadow = true;
            this.iw14.name = "Maze";
            this.iw14.position.set(11, 5, -22);
            this.iw14.rotation.set(0, 0, 0);
            this.add(this.iw14);
            console.log("Added Innerwall 14");
        }

        private addIW15(): void {

            this.iw15Geometry = new BoxGeometry(2, 10, 11);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw15 = new Physijs.ConvexMesh(this.iw15Geometry, this.wallPhysicsMaterial, 0);
            this.iw15.receiveShadow = true;
            this.iw15.name = "Maze";
            this.iw15.position.set(10, 5, 33.5);
            this.iw15.rotation.set(0, 0, 0);
            this.add(this.iw15);
            console.log("Added Innerwall 15");
        }

        private addIW16(): void {

            this.iw16Geometry = new BoxGeometry(2, 10, 11);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw16 = new Physijs.ConvexMesh(this.iw16Geometry, this.wallPhysicsMaterial, 0);
            this.iw16.receiveShadow = true;
            this.iw16.name = "Maze";
            this.iw16.position.set(-2, 5, 42.5);
            this.iw16.rotation.set(0, 0, 0);
            this.add(this.iw16);
            console.log("Added Innerwall 16");
        }

        private addIW17(): void {

            this.iw17Geometry = new BoxGeometry(2, 10, 11);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw17 = new Physijs.ConvexMesh(this.iw17Geometry, this.wallPhysicsMaterial, 0);
            this.iw17.receiveShadow = true;
            this.iw17.name = "Maze";
            this.iw17.position.set(-14, 5, 33.5);
            this.iw17.rotation.set(0, 0, 0);
            this.add(this.iw17);
            console.log("Added Innerwall 1");
        }

        private addIW18(): void {

            this.iw18Geometry = new BoxGeometry(2, 10, 5);
            this.wallPhysicsMaterial = Physijs.createMaterial(this.wallMaterial, 0, 0);
            this.iw18 = new Physijs.ConvexMesh(this.iw18Geometry, this.wallPhysicsMaterial, 0);
            this.iw18.receiveShadow = true;
            this.iw18.name = "Maze";
            this.iw18.position.set(-25, 5, 45.5);
            this.iw18.rotation.set(0, 0, 0);
            this.add(this.iw18);
            console.log("Added Innerwall 18");
        }


        /**
         * Adds the enemy object to the scene
         * 
         * @method addEnemy
         * @return void
         */
        private addEnemy(): void {
            // Enemy Object
            this.enemyGeometry = new SphereGeometry(1, 32, 32);
            this.enemyGeometry.scale(1, 1.5, 1);
            this.enemyMaterial = Physijs.createMaterial(new LambertMaterial({ color: 0xff2200 }), 0.4, 0);
            this.enemy = new Physijs.SphereMesh(this.enemyGeometry, this.enemyMaterial, 2);
            this.enemy.position.set(0, 60, -10);
            this.enemy.castShadow = true;
            this.enemy.name = "Enemy";
            this.add(this.enemy);
            console.log("Added Enemy to Scene");
        }

        /**
         * Adds the player controller to the scene
         * 
         * @method addPlayer
         * @return void
         */
        private addPlayer(): void {

            // Truck Body Object
            this.bodyTexture = new THREE.TextureLoader().load('../../Assets/images/Body.jpg');
            this.bodyTexture.wrapS = THREE.RepeatWrapping;
            this.bodyTexture.wrapT = THREE.RepeatWrapping;
            this.bodyTexture.repeat.set(2, 2);

            // Bruck bonnut Object
            this.frontTexture = new THREE.TextureLoader().load('../../Assets/images/Front.jpg');
            this.frontTexture.wrapS = THREE.RepeatWrapping;
            this.frontTexture.wrapT = THREE.RepeatWrapping;
            this.frontTexture.repeat.set(1, 1);

            this.frontTextureNormal = new THREE.TextureLoader().load('../../Assets/images/FrontNormal.png');
            this.frontTextureNormal.wrapS = THREE.RepeatWrapping;
            this.frontTextureNormal.wrapT = THREE.RepeatWrapping;
            this.frontTextureNormal.repeat.set(1, 1);

            this.frontMaterial = new PhongMaterial();
            this.frontMaterial.map = this.frontTexture;
            this.frontMaterial.bumpMap = this.frontTextureNormal;
            this.frontMaterial.bumpScale = 0.2;

            // Truck Windshield Object
            this.glassTexture = new THREE.TextureLoader().load('../../Assets/images/Glass.jpg');
            this.glassTexture.wrapS = THREE.RepeatWrapping;
            this.glassTexture.wrapT = THREE.RepeatWrapping;
            this.glassTexture.repeat.set(1, 1);

            // Left headlight Object
            this.lLightTexture = new THREE.TextureLoader().load('../../Assets/images/leftLight.png');
            this.lLightTexture.wrapS = THREE.RepeatWrapping;
            this.lLightTexture.wrapT = THREE.RepeatWrapping;
            this.lLightTexture.repeat.set(1, 1);

            // Right Headlight Object
            this.rLightTexture = new THREE.TextureLoader().load('../../Assets/images/rightLight.png');
            this.rLightTexture.wrapS = THREE.RepeatWrapping;
            this.rLightTexture.wrapT = THREE.RepeatWrapping;
            this.rLightTexture.repeat.set(1, 1);

            // Brak Lights Object
            this.breakLightTexture = new THREE.TextureLoader().load('../../Assets/images/breakLight.png');
            this.breakLightTexture.wrapS = THREE.RepeatWrapping;
            this.breakLightTexture.wrapT = THREE.RepeatWrapping;
            this.breakLightTexture.repeat.set(1, 1);

            // Universal Tire Object
            this.playersGeometry = new SphereGeometry(0.5, 32, 32);
            this.playerMaterial = Physijs.createMaterial(new PhongMaterial({ color: 0x000000 }), 0.4, 0);
            this.player = new Physijs.SphereMesh(this.playersGeometry, this.playerMaterial, 1);
            this.player.position.set(31.5, 3, 22);
            this.player.rotation.set(0, 3.14159, 0);
            this.player.receiveShadow = true;
            this.player.castShadow = true;
            this.player.name = "Player";

            // Truck Body Object
            this.playerGeometry1 = new BoxGeometry(5, 5, 5);
            this.playerMaterial1 = Physijs.createMaterial(this.frontMaterial, 0.4, 0);
            this.player1 = new Physijs.BoxMesh(this.playerGeometry1, this.playerMaterial1, 1);
            this.player1.position.set(0, 2.5, 1.5);
            this.player1.receiveShadow = true;
            this.player1.castShadow = true;
            this.player1.name = "Player2";
            this.player.add(this.player1);

            // Truck Bonet Object
            this.playerGeometrya = new BoxGeometry(5, 3, 3);
            this.playerMateriala = Physijs.createMaterial(new PhongMaterial({ map: this.frontTexture }), 0.4, 0);
            this.playera = new Physijs.ConvexMesh(this.playerGeometrya, this.playerMateriala, 1);
            this.playera.position.set(0, -1, -4);
            this.playera.receiveShadow = true;
            this.playera.castShadow = true;
            this.playera.name = "Player2";
            this.player1.add(this.playera);

            // Truck Windshield Object
            this.playerGeometryb = new BoxGeometry(4, 2, 0.01);
            this.playerMaterialb = Physijs.createMaterial(new PhongMaterial({ map: this.glassTexture }), 0.4, 0);

            this.playerb = new Physijs.BoxMesh(this.playerGeometryb, this.playerMaterialb, 1);
            this.playerb.position.set(0, 1.5, -2.5);
            this.playerb.receiveShadow = true;
            this.playerb.castShadow = true;
            this.playerb.name = "Playerb";
            this.player1.add(this.playerb);
            console.log("Added Player1 to Scene");

            this.playerbb = new Physijs.BoxMesh(this.playerGeometryb, this.playerMaterialb, 1);
            this.playerbb.position.set(0, 1.3, 2.5);
            this.playerbb.receiveShadow = true;
            this.playerbb.castShadow = true;
            this.playerbb.name = "Playerb";
            this.player1.add(this.playerbb);
            console.log("Added Player1 to Scene");


            // Truck Headlight Object
            this.playerGeometryc = new BoxGeometry(1, .5, 0.01);
            this.playerMaterialc = Physijs.createMaterial(new PhongMaterial({ map: this.lLightTexture }), 0.4, 0);
            this.playerMateriald = Physijs.createMaterial(new PhongMaterial({ map: this.rLightTexture }), 0.4, 0);
            this.playerc = new Physijs.BoxMesh(this.playerGeometryc, this.playerMaterialc, 1);
            this.playerc.position.set(1.5, -1.5, -5.5);
            this.playerc.receiveShadow = true;
            this.playerc.castShadow = true;
            this.playerc.name = "Player2";
            this.player1.add(this.playerc);
            console.log("Added Player1 to Scene");

            this.playerd = new Physijs.BoxMesh(this.playerGeometryc, this.playerMateriald, 1);
            this.playerd.position.set(-1.5, -1.5, -5.5);
            this.playerd.receiveShadow = true;
            this.playerd.castShadow = true;
            this.playerd.name = "Player2";
            this.player1.add(this.playerd);
            console.log("Added Player1 to Scene");


            // Truck Break lights Object
            this.playerGeometrye = new BoxGeometry(1, .5, 0.01);
            this.playerMateriale = Physijs.createMaterial(new PhongMaterial({ map: this.breakLightTexture }), 0.4, 0);

            this.playere = new Physijs.BoxMesh(this.playerGeometrye, this.playerMateriale, 1);
            this.playere.position.set(-1.5, -1.5, 2.5);
            this.playere.receiveShadow = true;
            this.playere.castShadow = true;
            this.playere.name = "Player2";
            this.player1.add(this.playere);
            console.log("Added Player1 to Scene");

            this.playerf = new Physijs.BoxMesh(this.playerGeometrye, this.playerMateriale, 1);
            this.playerf.position.set(1.5, -1.5, 2.5);
            this.playerf.receiveShadow = true;
            this.playerf.castShadow = true;
            this.playerf.name = "Player2";
            this.player1.add(this.playerf);
            console.log("Added Player1 to Scene");
            this.add(this.player);


        }

        /**
         * Add the death plane to the scene
         * 
         * @method addDeathPlane
         * @return void
         */
        private addDeathPlane(): void {
            this.deathPlaneGeometry = new BoxGeometry(200, 1, 200);
            this.deathPlaneMaterial = Physijs.createMaterial(new MeshBasicMaterial({ color: 0xff0000 }), 0.4, 0.6);
            // make deathPlane invisible during play - comment out next two lines during debugging
            this.deathPlaneMaterial.transparent = true;
            this.deathPlaneMaterial.opacity = 0;

            this.deathPlane = new Physijs.BoxMesh(this.deathPlaneGeometry, this.deathPlaneMaterial, 0);
            this.deathPlane.position.set(0, -10, 0);
            this.deathPlane.name = "DeathPlane";
            this.add(this.deathPlane);
        }


        /**
         * This method randomly sets the coin object's position
         * 
         * @method setCoinPosition
         * @return void
         */
        private setCoinPosition(coin: Physijs.ConvexMesh): void {
            var randomPointX: number = Math.floor(Math.random() * 20) - 10;
            var randomPointZ: number = Math.floor(Math.random() * 20) - 10;
            coin.position.set(randomPointX, 10, randomPointZ);
            this.add(coin);
        }

        /**
         * Event Handler method for any pointerLockChange events
         * 
         * @method pointerLockChange
         * @return void
         */
        pointerLockChange(event): void {
            if (document.pointerLockElement === this.element) {
                // enable our mouse and keyboard controls
                this.keyboardControls.enabled = true;
                this.mouseControls.enabled = true;
                this.blocker.style.display = 'none';
            } else {
                if (livesValue <= 0) {
                    this.blocker.style.display = 'none';
                    document.removeEventListener('pointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('mozpointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('webkitpointerlockchange', this.pointerLockChange.bind(this), false);
                    document.removeEventListener('pointerlockerror', this.pointerLockError.bind(this), false);
                    document.removeEventListener('mozpointerlockerror', this.pointerLockError.bind(this), false);
                    document.removeEventListener('webkitpointerlockerror', this.pointerLockError.bind(this), false);
                } else {
                    this.blocker.style.display = '-webkit-box';
                    this.blocker.style.display = '-moz-box';
                    this.blocker.style.display = 'box';
                    this.instructions.style.display = '';
                }
                // disable our mouse and keyboard controls
                this.keyboardControls.enabled = false;
                this.mouseControls.enabled = false;
                console.log("PointerLock disabled");
            }
        }

        /**
         * Event handler for PointerLockError
         * 
         * @method pointerLockError
         * @return void
         */
        private pointerLockError(event): void {
            this.instructions.style.display = '';
            console.log("PointerLock Error Detected!!");
        }

        // Check Controls Function

        /**
         * This method updates the player's position based on user input
         * 
         * @method checkControls
         * @return void
         */
        private checkControls(): void {
            if (this.keyboardControls.enabled) {
                this.velocity = new Vector3();

                var time: number = performance.now();
                var delta: number = (time - this.prevTime) / 1000;

                var direction = new Vector3(0, 0, 0);
                if (this.keyboardControls.moveForward) {
                    this.velocity.z -= 1000.0 * delta;
                }
                if (this.keyboardControls.moveLeft) {
                    this.velocity.x -= 400.0 * delta;
                }
                if (this.keyboardControls.moveBackward) {
                    this.velocity.z += 1000.0 * delta;
                }
                if (this.keyboardControls.moveRight) {
                    this.velocity.x += 400.0 * delta;
                }

                if (this.isGrounded) {

                    if (this.keyboardControls.jump) {
                        this.velocity.y += 4000.0 * delta;
                        if (this.player.position.y > 4) {
                            this.isGrounded = false;
                            createjs.Sound.play("jump");
                        }
                    }

                    this.player.setDamping(0.7, 0.1);
                    // Changing player's rotation
                    this.player.setAngularVelocity(new Vector3(0, this.mouseControls.yaw, 0));
                    direction.addVectors(direction, this.velocity);
                    direction.applyQuaternion(this.player.quaternion);
                    if (Math.abs(this.player.getLinearVelocity().x) < 20 && Math.abs(this.player.getLinearVelocity().y) < 10) {
                        this.player.applyCentralForce(direction);
                    }

                    this.cameraLook();

                } // isGrounded ends

                //reset Pitch and Yaw
                this.mouseControls.pitch = 0;
                this.mouseControls.yaw = 0;

                this.prevTime = time;
            } // Controls Enabled ends
            else {
                this.player.setAngularVelocity(new Vector3(0, 0, 0));
            }
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {
            // setup the class context to use within events
            var self = this;

            // Set Up Scoreboard
            this.setupScoreboard();

            //check to see if pointerlock is supported
            this.havePointerLock = 'pointerLockElement' in document ||
                'mozPointerLockElement' in document ||
                'webkitPointerLockElement' in document;

            // Check to see if we have pointerLock
            if (this.havePointerLock) {
                this.element = document.body;

                this.instructions.addEventListener('click', () => {

                    // Ask the user for pointer lock
                    console.log("Requesting PointerLock");

                    this.element.requestPointerLock = this.element.requestPointerLock ||
                        this.element.mozRequestPointerLock ||
                        this.element.webkitRequestPointerLock;

                    this.element.requestPointerLock();
                });

                document.addEventListener('pointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('mozpointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('webkitpointerlockchange', this.pointerLockChange.bind(this), false);
                document.addEventListener('pointerlockerror', this.pointerLockError.bind(this), false);
                document.addEventListener('mozpointerlockerror', this.pointerLockError.bind(this), false);
                document.addEventListener('webkitpointerlockerror', this.pointerLockError.bind(this), false);
            }

            // Scene changes for Physijs
            this.name = "Play Scene";
            this.fog = new THREE.Fog(0xffffff, 0, 750);
            this.setGravity(new THREE.Vector3(0, -10, 0));

            // Add Spot Light to the scene
            this.addSpotLight();

            // Ground Object
            this.addGround();

            // Add player controller
            this.addPlayer();

            // Add custom coin imported from Blender
            //this.addCoinMesh();

            // Add death plane to the scene
            this.addDeathPlane();

            //Add boundary1 to the scene
            this.addBoundary1();


            //Add boundary2 to the scene
            this.addBoundary2();

            //Add boundary3 to the scene

            this.addBoundary3();
            this.addBoundary4();
            this.addBoundary5();

            this.addIW1();
            this.addIW2();
            this.addIW3();
            this.addIW4();
            this.addIW5();
            this.addIW6();
            this.addIW7();
            this.addIW8();
            this.addIW8a();
            // this.addIW9();
            this.addIW10();
            this.addIW11();
            this.addIW12();
            this.addIW13();
            this.addIW14();
            this.addIW15();
            this.addIW16();
            this.addIW17();
            this.addIW18();


            // Collision Check with player
            this.player.addEventListener('collision', function(eventObject) {
                if (eventObject.name === "Ground") {
                    self.isGrounded = true;
                    createjs.Sound.play("land");
                }
                if (eventObject.name === "Coin") {
                    createjs.Sound.play("coin");
                    self.remove(eventObject);
                    self.setCoinPosition(eventObject);
                    scoreValue += 100;
                    self.scoreLabel.text = "SCORE: " + scoreValue;
                }

                if (eventObject.name === "Maze") {

                    createjs.Sound.play("land");
                    livesValue--;
                    if (livesValue <= 0) {
                        // Exit Pointer Lock
                        document.exitPointerLock();
                        self.children = []; // an attempt to clean up
                        self.player.remove(camera);

                        // Play the Game Over Scene
                        currentScene = config.Scene.OVER;
                        changeScene();
                    } else {
                        // otherwise reset my player and update Lives
                        self.livesLabel.text = "LIVES: " + livesValue;
                        // self.remove(self.player);
                        // self.player.position.set(0, 30, 10);
                        // self.player.rotation.set(0, 0, 0);
                        // self.add(self.player);
                    }
                }

                if (eventObject.name === "DeathPlane") {
                    createjs.Sound.play("hit");
                    livesValue--;
                    if (livesValue <= 0) {
                        // Exit Pointer Lock
                        document.exitPointerLock();
                        self.children = []; // an attempt to clean up
                        self.player.remove(camera);

                        // Play the Game Over Scene
                        currentScene = config.Scene.OVER;
                        changeScene();
                    } else {
                        // otherwise reset my player and update Lives
                        self.livesLabel.text = "LIVES: " + livesValue;
                        self.remove(self.player);
                        self.player.position.set(0, 30, 10);
                        self.player.rotation.set(0, 0, 0);
                        self.add(self.player);
                    }
                }


            }.bind(self));

            // create parent-child relationship with camera and player
            this.player.add(camera);
            //this.add(camera)
            camera.rotation.set(-0.22, 0, 0);
            camera.position.set(0, 8, 5);


            this.simulate();
        }

        /**
         * Camera Look function
         * 
         * @method cameraLook
         * @return void
         */
        private cameraLook(): void {
            var zenith: number = THREE.Math.degToRad(-20);
            var nadir: number = THREE.Math.degToRad(-20);

            var cameraPitch: number = camera.rotation.x + this.mouseControls.pitch;

            // Constrain the Camera Pitch
            // camera.rotation.x = THREE.Math.clamp(cameraPitch, nadir, zenith);
        }

        /**
         * @method update
         * @returns void
         */
        public update(): void {


            this.checkControls();

            this.stage.update();

            if (!this.keyboardControls.paused) {
                this.simulate();
            }
        }

        /**
         * Responds to screen resizes
         * 
         * @method resize
         * @return void
         */
        public resize(): void {
            canvas.style.width = "100%";
            this.livesLabel.x = config.Screen.WIDTH * 0.1;
            this.livesLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.scoreLabel.x = config.Screen.WIDTH * 0.8;
            this.scoreLabel.y = (config.Screen.HEIGHT * 0.15) * 0.20;
            this.stage.update();
        }
    }
}