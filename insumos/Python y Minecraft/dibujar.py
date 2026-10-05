from mcpi.minecraft import Minecraft
import pokemon as pk

mc = Minecraft.create("15.235.56.59", 8180)
usuario = mc.getPlayerEntityId("24Cris")

x, y, z = mc.entity.getTilePos(usuario) 

def dibujar_pixelart(x, y, z, matriz):
    filas = len(matriz)
    columnas = len(matriz[0])

    for i in range(filas):
        for j in range(columnas):
            valor = matriz[i][j]
            if valor in pk.PALETA:
                bloque, id = pk.PALETA[valor]
                mc.setBlock(x + j, y + (filas - i), z, bloque, id)

dibujar_pixelart(x, y, z, pk.PK_125)