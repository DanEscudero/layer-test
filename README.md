Para o runtime da lambda funcionar corretamente, o zip da layer tem que subir com a estrutura:

	nodejs
	  |_ node_modules
	    |_ ...

Para conseguir fazer esse zip:

1. A layer no serverless.yml tem que trocar o jetpack.roots na pasta nodejs

2. Tem que criar a pasta nodejs, como symlink, contendo o node_modules e o package.json:

		mkdir nodejs
		cd nodejs
		ln -s ../package.json package.json
		ln -s ../node_modules node_modules
		cd ..

Importante adicionar a flag `individually: true` na sessão package do serverless.yml
