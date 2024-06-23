<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:param name="lang" select="'fr'" /> <!-- Paramètre de langue par défaut -->

    <xsl:template match="/">
        <xsl:choose>
            <xsl:when test="$lang = 'jp'">
                <xsl:apply-templates select="document('cv_jp.xml')/*" />
            </xsl:when>
            <xsl:when test="$lang = 'pol'">
                <xsl:apply-templates select="document('cv_pol.xml')/*" />
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates select="document('cv_fr.xml')/*" /> <!-- CV en français par défaut -->
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

    <!-- Modèles pour transformer les différentes parties du CV -->
    <!-- Ajoutez les modèles nécessaires pour chaque élément du CV -->
</xsl:stylesheet>
