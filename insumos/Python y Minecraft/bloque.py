from mcpi.minecraft import Minecraft

mc = Minecraft.create("15.235.56.59",8180)
usuario = mc.getPlayerEntityId("24Cris")
x, y, z = mc.entity.getTilePos(usuario)

mc.setBlock(x,y,z,35,15)